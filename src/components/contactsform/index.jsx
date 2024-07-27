import style from './contactsform.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { addContacts } from 'components/redux/operations';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    const contactsFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(newContact.name.toLowerCase())
    );
    if (contactsFilter.length !== 0) {
      return alert(`${newContact.name} is already in contacts`);
    }
    dispatch(addContacts(newContact));
    form.reset();
  };
  return (
    <form onSubmit={handlerSubmit} className={style.form}>
      <label htmlFor="name" className={style.formLabe}>
        Name
        <input
          type="text"
          className={style.formLnput}
          name="name"
          id="name"
          pattern="^[a-zA-Za]+(([' \-][a-zA-Za])?[a-zA-Za]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number" className={style.formLabel}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
          className={style.formInput}
        />
      </label>
      <button type="submit" className={style.formBtn}>
        Add contact
      </button>
    </form>
  );
};
export default ContactsForm;


