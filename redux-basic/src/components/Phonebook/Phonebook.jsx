import styles from "./Phonebook.module.css";
import ContactsList from "../ContactsList/ContactsList";
import FormMain from "../Form/Form";
import Filter from "../Filter/Filter";

const Phonebook = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.Title}>Phonebook</h2>
      <FormMain />
      <h2 className={styles.Title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Phonebook;
