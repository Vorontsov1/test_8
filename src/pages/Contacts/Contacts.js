// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList';
import Phonebook from 'components/Phonebook';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Tasks() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Phonebook />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ContactList />
    </>
  );
}

// ================================App hw-07================================================
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';

// import { Container, Title, SubTitle } from 'components/App.styled';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Title>Phonebook</Title>
//       <ContactForm />

//       <SubTitle>Contacts</SubTitle>
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </Container>
//   );
// };
