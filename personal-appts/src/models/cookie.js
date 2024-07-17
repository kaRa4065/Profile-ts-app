import { getCookie } from "typescript-cookie";

export const isLoggedIn = () => {
  //cookie.load used tp take the token which saved in cookies
  const token = getCookie("Token");

  return token;
};
