import types from "./types";
import { generate } from "shortid";
import { combineReducers } from "redux";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const itemsReducer = (
  store = initialState.contacts.items,
  { type, payload }
) => {
  switch (type) {
    case types.ADD_TO_PHONEBOOK:
      const newContact = { ...payload, id: generate() };
      return [...store, newContact];

    case types.REMOVE_FROM_PHONEBOOK:
      const updateContacts = store.filter((item) => item.id !== payload);
      return updateContacts;

    default:
      return store;
  }
};

const filterReducer = (
  store = initialState.contacts.filter,
  { type, payload }
) => {
  switch (type) {
    case types.FILTER_PHONEBOOK:
      return payload;

    default:
      return store;
  }
};
export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const FilterLowerCase = filter.toLowerCase();
//     console.log(filter);
//     return contacts.filter((item) =>
//       item?.name?.toLowerCase().includes(FilterLowerCase)
//     );
