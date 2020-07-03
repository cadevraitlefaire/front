import React, {useMemo, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../../hooks';
import { SearchLoading } from '../Loading/Search';
import { Card, SIMPLE_CARD } from '../Card';
import { NotFound } from './Alert';
import { Document, Subject } from '../../actions';

const SearchCards = ({ documents, params }) => useMemo(() => (
  <>
    {
      documents?.map((document, key) => (
        <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={key}>
          <Card
            type={SIMPLE_CARD}
            to={`?${new URLSearchParams({...params, document: document.id}).toString()}`}
            title={document.name}
          />
        </div>
      ))
    }
  </>
), [documents]);

export const DocumentList = () => {
  const { search } = useLocation();
  const { school, subject } = useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);
  const [documents, setDocuments] = useState();
  const memoizedPromises = useMemo(
    () => [
      () => new Subject().getOne({id: subject}).then(({ documents }) => Promise.all(documents.map(document => new Document().getOne({id: document.split('/')[3]}))).then(setDocuments)),
    ],
    []
  );
  const loading = useLoading(memoizedPromises);

  return (
    loading ? (
      <SearchLoading />
    ) : Array.isArray(documents) && !documents.length ? (
      <NotFound>
        Aucun sujet trouvé
      </NotFound>
    ) : <SearchCards documents={documents} params={{school, subject}}/>
  )
}
