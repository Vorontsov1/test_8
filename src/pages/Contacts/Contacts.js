import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import ContactList from 'components/ContactList';
import { LoaderContacts } from 'components/Loader/Loader';
import { Container, Title } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Contacts</Title>

      {isLoading && !error ? (
        <LoaderContacts loading={isLoading} color={'#2196f3'} />
      ) : (
        <ContactList />
      )}
    </Container>
  );
};

export default Contacts;
