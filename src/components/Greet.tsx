type Props = {
  name: string;
  number: number;
  isLoggedIn: boolean;
};
const Greet: React.FC<Props> = ({ name, number, isLoggedIn }) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! you have ${number} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
export default Greet;
