import { personName } from "../types/personName";

type Props = {
  personName: personName;
};
const Person: React.FC<Props> = ({ personName: { firstName, lastName } }) => {
  return (
    <div>
      {firstName} {lastName}{" "}
    </div>
  );
};
export default Person;
