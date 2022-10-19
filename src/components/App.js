// import React, { Component } from 'react';
import { useState, useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Title, SubTitle } from 'components/App.styled';

import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('запуск useEffect   ' + Date.now());
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevState => {
      return [newContact, ...prevState];
    });
  };

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onContact={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContacts}
      />
    </Container>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(savedContacts);
//     // console.log('Монтирование', parsedContacts);
//     if (parsedContacts) {
//       this.setState({
//         contacts: parsedContacts,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('до обновления', prevState.contacts);
//     // console.log('после обновления', this.state.contacts);

//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const Contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     if (
//       this.state.contacts.some(
//         contact => contact.name.toLowerCase() === Contact.name.toLowerCase()
//       )
//     ) {
//       return alert(`${Contact.name} is already in contacts.`);
//     }

//     this.setState(prevState => ({
//       contacts: [Contact, ...prevState.contacts],
//     }));
//   };

//   changeFilter = e => {
//     const { name, value } = e.currentTarget;
//     // console.log(name);
//     this.setState({ [name]: value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContacts = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     // console.log(this.state);

//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <ContactForm onContact={this.addContact} />
//         <SubTitle>Contacts</SubTitle>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContacts}
//         />
//       </Container>
//     );
//   }
// }
