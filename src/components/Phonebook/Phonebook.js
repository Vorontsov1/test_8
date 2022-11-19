import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Title, SubTitle } from './Phonebook.styled';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Container>
  );
};

export default Phonebook;
