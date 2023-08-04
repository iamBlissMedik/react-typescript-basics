type Props = {
  name: string;
};
const Greet: React.FC<Props> = ({ name }) => {
  return <div>Greet {name}</div>;
};
export default Greet;
