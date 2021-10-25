import types from "./types";

export const addToPhonebook = (newContact) => {
  return {
    type: types.ADD_TO_PHONEBOOK,
    payload: newContact,
  };
};

export const removeFromPhonebook = (payload) => {
  return {
    type: types.REMOVE_FROM_PHONEBOOK,
    payload,
  };
};

export const filterPhonebook = (payload) => {
  return {
    type: types.FILTER_PHONEBOOK,
    payload,
  };
};
