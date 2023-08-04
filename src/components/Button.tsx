type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button: React.FC<ButtonProps> = ({ handleClick }) => {
  return <button onClick={(event) => handleClick(event, 2)}>Click</button>;
};
export default Button;
