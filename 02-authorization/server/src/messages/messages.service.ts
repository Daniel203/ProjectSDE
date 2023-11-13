// This is an example of a service. Usually it should fetch some data from the 
// database or call another service, but for semplicity we are just 
// returning an hardcoded message.


import { Message } from "./message.model";

export const getPublicMessage = (): Message => {
  return {
    text: "This is a public message.",
  };
};

export const getProtectedMessage = (): Message => {
  return {
    text: "This is a protected message.",
  };
};

export const getAdminMessage = (): Message => {
  return {
    text: "This is an admin message.",
  };
};
