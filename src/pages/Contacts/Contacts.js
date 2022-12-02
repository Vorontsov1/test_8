import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectOperation, selectIsLoading } from 'redux/selectors';

import IconButton from 'components/IconButton';
import Modal from 'components/Modal';
import { AiOutlinePlus } from 'react-icons/ai';

import ContactList from 'components/ContactList';
import { LoaderContacts } from 'components/Loader/Loader';
import { Container, Title } from './Contacts.styled';

const Contacts = () => {
  const [isShowModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const operation = useSelector(selectOperation);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <Container>
      <IconButton onClick={toggleModal} aria-label="Add contacts">
        <AiOutlinePlus width="40" height="40" fill="#003b8e" />
      </IconButton>
      {isShowModal && <Modal onClose={toggleModal} />}

      <Title>Contacts</Title>

      {operation === 'fetch' && !error ? (
        <LoaderContacts loading={isLoading} color={'#2196f3'} />
      ) : (
        <ContactList />
      )}
    </Container>
  );
};

export default Contacts;
