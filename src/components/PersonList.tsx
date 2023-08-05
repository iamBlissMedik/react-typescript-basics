import { PersonsListProps } from "../types/Person";

const PersonList: React.FC<PersonsListProps> = ({ names }) => {
  return (
    <div>
      {names.map((name) => (
        <h2 key={name.lastName}>
          {name.firstName} {name.lastName}
        </h2>
      ))}
    </div>
  );
};
export default PersonList;
