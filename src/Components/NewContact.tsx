import { FC, useState } from "react";
import { Person } from "../Interfaces/Person";

interface Props {
  onSave: (newPerson: Person) => void;
  title: string;
  initialPerson?: Person;
}

const NewContact: FC<Props> = ({
  onSave,
  title,
  initialPerson = {
    id: "",
    name: "",
    city: "",
  },
}) => {
  const [newPerson, setNewPerson] = useState<Person>(initialPerson);

  const saveContact = (): void => {
    if (!newPerson.name || !newPerson.city) return;
    onSave(newPerson);
    setNewPerson({
      id: "",
      name: "",
      city: "",
    });
  };

  return (
    <div className="container">
      <h3>{title}</h3>
      <div className="input-container">
        <div>
          <label htmlFor="contact-name">Name</label>
          <input
            type="text"
            id="contact-name"
            value={newPerson?.name || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPerson({ ...newPerson, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="contact-city">City</label>
          <input
            type="text"
            id="contact-city"
            value={newPerson?.city || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPerson({ ...newPerson, city: e.target.value })
            }
          />
        </div>
        <button type="button" onClick={saveContact}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewContact;
