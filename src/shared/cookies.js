import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookie = (name) => cookies.get(name);
export const setCookie = (name, value) =>
  cookies.set(name, value, {
    path: '/',
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });

export const removeCookie = (name) =>
  cookies.remove(name, { expires: new Date(Date.now()) });
