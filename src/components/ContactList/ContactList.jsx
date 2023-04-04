import { ContactItem } from 'components/ContactItem/ContactItem';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, ListItem } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getClearFilter = () => {
    const clearFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(clearFilter)
    );
  };

  const filtredContacts = useMemo(getClearFilter, [contacts, filter]);


    return (
        <List>
            {filtredContacts.map(contact => (
                <ListItem key={contact.id}>
                    <ContactItem contact={contact}/>
                </ListItem>
            ))}
        </List>
    )
}

