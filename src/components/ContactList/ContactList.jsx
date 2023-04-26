import { useDispatch } from 'react-redux';
import { delContact } from '../../redux/contactSlice';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import {
  List,
  ContactItem,
  DelButton,
  ContactValue,
} from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  const normalizedContacts = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <section>
      <List>
        {visibleContacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem>
                <ContactValue>
                  {contact.name}: {contact.number}
                </ContactValue>

                <DelButton onClick={() => dispatch(delContact(contact.id))}>
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
