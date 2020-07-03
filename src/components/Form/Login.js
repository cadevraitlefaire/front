import React, { useContext } from 'react';
import { RiLock2Line } from 'react-icons/ri';
import { User } from '../../actions/User';
import { UPDATE_CLIENT, UserContext } from '../../contexts/UserContext';

const fields = [
  {
    label: 'Username',
  },
  {
    label: 'Password',
    type: 'password',
  },
];

export const Login = () => {
  const {dispatch} = useContext(UserContext);
  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <h1 className="text-4xl text-center mt-8 font-thin flex">
          <span className="mx-auto flex text-gray-800">
            <RiLock2Line className="my-auto mr-2 text-gray-800"/> Connexion
          </span>
          </h1>

          <div className="p-8">
            <form method="POST" className="" onSubmit={event => {
              event.preventDefault();
              new User()
                .login(([].reduce.call(event.target, (data, element) => {
                  if (element.name && element.value) {
                    data[element.name] = element.value
                  }
                  return data;
                }, {})))
                .then(({ data: { token } }) => dispatch({payload: token, type: UPDATE_CLIENT}))
                .catch();
            }}>
              {
                fields.map((field, key) => (
                  <div className="mb-5" key={key}>
                    <label htmlFor={field.name || field.label.toLowerCase()} className="block mb-2 text-sm font-medium text-gray-800">
                      {field.label}
                    </label>
                    <input {...{
                      ...field,
                      className: 'block w-full p-3 rounded bg-gray-200 text-gray-600 border border-transparent focus:border-gradient required',
                      name: field.name || field.label.toLowerCase(),
                      required: true
                    }} />
                  </div>
                ))
              }
              <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Se connecter</button>
            </form>
          </div>

          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <a href="/" className="font-medium text-indigo-500">Create account</a>

            <a href="/" className="text-gray-600">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  )
};
