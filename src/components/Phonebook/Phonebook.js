import ContactForm from 'components/ContactForm';

import { Title, SubTitle } from './Phonebook.styled';

const Phonebook = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
    </>
  );
};

export default Phonebook;
