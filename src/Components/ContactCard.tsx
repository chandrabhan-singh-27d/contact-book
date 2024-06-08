import { FC } from "react";
import { Person } from "../Interfaces/Person";

interface Props {
  person: Person;
  onEditContact: () => void;
}
const ContactCard: FC<Props> = ({ person, onEditContact }) => {
  return (
    <div className="contact-container">
      <div>
        <div className="user_name">{person.name}</div>
        <div className="user_city">City: {person.city}</div>
      </div>
      <button onClick={onEditContact}>Edit Contact</button>
    </div>
  );
};

export default ContactCard;
