// import { Cookies } from 'react-cookie';

// const cookies = new Cookies();

// export const getCookie = (name) => cookies.get(name);
// export const setCookie = (name, value) =>
//   cookies.set(name, value, {
//     path: '/',
//     expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
//   });

// export const removeCookie = (name) =>
//   cookies.remove(name, { expires: new Date(Date.now()) });


import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};