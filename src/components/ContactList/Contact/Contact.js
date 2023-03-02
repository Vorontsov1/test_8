import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { RiDeleteBin5Fill } from 'react-icons/ri';
=======
import { MdDeleteForever } from 'react-icons/md';
>>>>>>> 97c9ad507dca3ac14b1eb18752e914f5335a46cf

import { getRandomHexColor, upFirst } from 'utils/index';
import { selectOperation } from 'redux/selectors';
import { LoaderContact } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contacts/operations';
import {
  ContactWrapper,
  Text,
  Avatar,
  Button,
<<<<<<< HEAD
} from 'components/ContactList/Contact/Contact.styled.js';
=======
} from 'components/ContactList/Contact/Contacts.styled';
>>>>>>> 97c9ad507dca3ac14b1eb18752e914f5335a46cf

export const Contact = ({ contact: { id, name, number } }) => {
  const operation = useSelector(selectOperation);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

<<<<<<< HEAD
   return (
     <>
       <ContactWrapper>
         <Avatar color={getRandomHexColor()}>{upFirst(name)}</Avatar>

         <Text>
           {name}
           <span>Phone: {number}</span>
         </Text>

         <Button type="button" onClick={handleDelete}>
           {operation === id ? (
             <LoaderContact
               loading={operation === id}
               color={'#003b8e'}
               size={18}
             />
           ) : (
             <RiDeleteBin5Fill size={28} />
           )}
         </Button>
       </ContactWrapper>
     </>
   );
=======
  return (
    <>
      <ContactWrapper>
        <Avatar color={getRandomHexColor()}>{upFirst(name)}</Avatar>

        <Text>
          {name}
          <span>Phone: {number}</span>
        </Text>

        <Button type="button" onClick={handleDelete}>
          {operation === id ? (
            <LoaderContact
              loading={operation === id}
              color={'#003b8e'}
              size={18}
            />
          ) : (
            <MdDeleteForever size={28} />
          )}
        </Button>
      </ContactWrapper>
    </>
  );
>>>>>>> 97c9ad507dca3ac14b1eb18752e914f5335a46cf
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
<<<<<<< HEAD

=======
>>>>>>> 97c9ad507dca3ac14b1eb18752e914f5335a46cf
