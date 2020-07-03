import React, { useMemo } from 'react';
import { Layout } from '../Layout';
import { useLocation, useHistory } from 'react-router-dom';
import { useAuthenticated } from '../../hooks';
import { DocumentList, SchoolList, SubjectList } from '../List';
import { Card, FETCH_CARD } from '../Card';
import { School } from '../../actions/School';
import { Subject } from '../../actions';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Search = () => {
  useAuthenticated();
  const { search } = useLocation();
  const { push } = useHistory();
  const { school, subject } = useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);

  return (
    <Layout navbar={{neverTop: true}}>
      {
        (school || subject) && (
          <div className="flex flex-wrap">
            <h2 className="text-gray-800 p-2 block w-full ml-2 underline italic text-lg font-bold">
              Votre sélection
            </h2>
            {
              school && (
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                  <Card type={FETCH_CARD} to={`?${new URLSearchParams({school}).toString()}`} resource={new School()} id={school} />
                </div>
              )
            }
            {
              subject && (
                <div className="w-full sm:w-1/2 md:w-1/4 p-2">
                  <Card type={FETCH_CARD} to={`?${new URLSearchParams({school, subject}).toString()}`} resource={new Subject()} id={subject} />
                </div>
              )
            }
            <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex">
              <button onClick={() => push('/search')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 my-auto px-4 rounded inline-flex items-center">
                <RiDeleteBin6Line /> <span className="pl-1">Supprimer les filtres</span>
              </button>
            </div>
          </div>
        )
      }
      <div className="flex flex-wrap">
        {
          !school ?
            <SchoolList/> :
            !subject ?
              <SubjectList /> :
              <DocumentList />
        }
      </div>
    </Layout>
  )
};
