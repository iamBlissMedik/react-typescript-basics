import { PersonProps } from "../types/Person";

const Person: React.FC<PersonProps> = ({ name: { firstName, lastName } }) => {
  return (
    <div>
      {firstName} {lastName}{" "}
    </div>
  );
};
export default Person;
