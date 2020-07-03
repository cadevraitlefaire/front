import React, { useMemo, useState } from 'react';
import { useLoading } from '../../hooks';
import { useLocation } from 'react-router-dom';
import { School } from '../../actions/School';
import { SearchLoading } from '../Loading/Search';
import { Subject } from '../../actions';
import { Card, SIMPLE_CARD } from '../Card';
import { NotFound } from './Alert';

const SearchCards = ({subjects, school}) => useMemo(() => (
  <>
    {
      subjects?.map((subject, key) => (
        <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={key}>
          <Card
            type={SIMPLE_CARD}
            to={`?${new URLSearchParams({school, subject: subject.id}).toString()}`}
            title={subject.name}
            subtitle={`${ subject.documents.length } sujets`}
          />
        </div>
      ))
    }
  </>
), [ school, subjects ]);

export const SubjectList = () => {
  const [ subjects, setSubjects ] = useState();
  const { search } = useLocation();
  const { school } = useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);
  const memoizedPromises = useMemo(
    () => [
      () => new School()
        .getOne({id: school})
        .then(({subject}) => Promise.all(subject.map(s => new Subject().getOne({id: s.split('/')[3]}))).then(setSubjects))
        .then(console.log),
    ],
    []
  );
  const loading = useLoading(memoizedPromises);

  return (
    loading ? (
      <SearchLoading/>
    ) : Array.isArray(subjects) && !subjects.length ? (
      <NotFound>
        Aucune matière trouvée
      </NotFound>
    ) : <SearchCards subjects={subjects} school={school}/>
  )
}
