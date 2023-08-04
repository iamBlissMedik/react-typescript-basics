type Props = {
  personName: {
    firstName: string;
    lastName: string;
  };
};
const Person: React.FC<Props> = ({ personName: { firstName, lastName } }) => {
  return (
    <div>
      {firstName} {lastName}{" "}
    </div>
  );
};
export default Person;
