import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
// import { useSelector } from 'react-redux';
import { useContacts } from 'redux/selectors';
import {
  List,
  ContactItem,
  DelButton,
  ContactValue,
} from './ContactList.styled';

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedContacts = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedContacts)
//   );
// };

export const ContactList = () => {
  const contacts = useContacts();
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  // const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <section>
      <List>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem>
                <ContactValue>
                  {contact.name}: {contact.number}
                </ContactValue>

                <DelButton onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
                </DelButton>
              </ContactItem>
            </li>
          );
        })}
      </List>
    </section>
  );
};
