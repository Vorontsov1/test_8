import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';

import { getRandomHexColor, upFirst } from 'utils/index';
import { selectIsLoadingDeleteContact } from 'redux/selectors';
import { LoaderContact } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactWrapper,
  Text,
  Avatar,
  Button,
} from 'components/ContactList/Contact/Contacts.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  const isLoadingDeleteContact = useSelector(selectIsLoadingDeleteContact);
  // const isLoadingDeleteContact = true;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ContactWrapper>
        <Avatar color={getRandomHexColor()}>{upFirst(name)}</Avatar>

        <Text>
          {name}
          <span>Phone: {number}</span>
        </Text>

        <Button type="button" onClick={handleDelete}>
          {isLoadingDeleteContact ? (
            <LoaderContact
              loading={isLoadingDeleteContact}
              color={'#003b8e'}
              size={10}
            />
          ) : (
            <MdDeleteForever size={28} />
          )}
        </Button>
      </ContactWrapper>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
