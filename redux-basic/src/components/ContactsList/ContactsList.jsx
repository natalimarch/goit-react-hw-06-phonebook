import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPhonebook } from "../../redux/actions";
import { getContacts, getFilter } from "../../redux/selectors";
import styles from "./ContactsList.module.css";

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onFilter = () => {
    const filterItem = filter.toLowerCase();
    const filterContacts = contacts.filter((item) =>
      item?.name?.toLowerCase().includes(filterItem)
    );
    return filterContacts;
  };

  const removeFromContact = (id) => {
    dispatch(removeFromPhonebook(id));
  };

  const AddNewContacts = onFilter().map((item) => {
    const { name, number } = item;
    return (
      <li key={item.id} className={styles.Item}>
        <p className={styles.Text}>
          {name} {number}
        </p>
        <button
          className={styles.Btn}
          type="button"
          onClick={() => removeFromContact(item.id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <>
      <ul className={styles.List}>{AddNewContacts}</ul>
    </>
  );
};

export default ContactsList;
