import React, {useMemo, useState} from 'react';
import { useLoading } from '../../hooks';
import { School } from '../../actions/School';
import { SearchLoading } from '../Loading/Search';
import { Card, SIMPLE_CARD } from '../Card';
import { NotFound } from './Alert';

const SearchCards = ({ schools }) => useMemo(() => (
  <>
    {
      schools?.map((school, key) => (
        <div className="w-full sm:w-1/2 md:w-1/4 p-2" key={key}>
          <Card
            type={SIMPLE_CARD}
            to={`?${new URLSearchParams({school: school.id}).toString()}`}
            title={school.name}
            subtitle={`${ school.subject.length } matières`}
          />
        </div>
      ))
    }
  </>
), [schools]);

export const SchoolList = () => {
  const [schools, setSchools] = useState();
  const memoizedPromises = useMemo(
    () => [
      () => new School().getMany().then(setSchools),
    ],
    []
  );
  const loading = useLoading(memoizedPromises);

  return (
    loading ? (
      <SearchLoading />
    ) : Array.isArray(schools) && !schools.length ? (
      <NotFound>
        Aucune école trouvée
      </NotFound>
    ) : <SearchCards schools={schools}/>
  )
}
