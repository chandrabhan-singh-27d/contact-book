import { FC, useState } from "react";
import NewContact from "./Components/NewContact";
import ContactCard from "./Components/ContactCard";
import "./styles.css";
import { Person } from "./Interfaces/Person";
import { nanoid } from "nanoid";
const App: FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [personBeingEdited, setPersonBeingEdited] = useState<string | null>(
    null
  );

  const addNewContact = (newPerson: Person): void => {
    setPersons([...persons, { ...newPerson, id: nanoid() }]);
  };

  const handleEditContact = (updatedPerson: Person): void => {
    setPersons(
      persons.map((person) => {
        if (person.id === updatedPerson.id) {
          return updatedPerson;
        }
        return person;
      })
    );
    setPersonBeingEdited(null);
  };

  return (
    <>
      <NewContact onSave={addNewContact} title="Add New Contact" />
      {persons.map((person) => {
        if (personBeingEdited && person.id === personBeingEdited) {
          return (
            <NewContact
              key={person.id}
              title="Edit Contact"
              initialPerson={person}
              onSave={handleEditContact}
            />
          );
        }
        return (
          <ContactCard
            key={person.id}
            person={person}
            onEditContact={() => setPersonBeingEdited(person.id)}
          />
        );
      })}
    </>
  );
};

export default App;
