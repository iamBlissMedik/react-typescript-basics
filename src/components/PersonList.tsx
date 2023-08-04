import { personName } from "../types/personName";

type nameList = {
  nameList: personName[];
};
const PersonList: React.FC<nameList> = ({ nameList }) => {
  return (
    <div>
      {nameList.map((name) => (
        <h2 key={name.lastName}>
          {name.firstName} {name.lastName}
        </h2>
      ))}
    </div>
  );
};
export default PersonList;
