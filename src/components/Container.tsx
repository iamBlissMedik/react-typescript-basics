type ContainerProps = {
  styles: React.CSSProperties;
};

const Container: React.FC<ContainerProps> = ({ styles }) => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      Text content
    </div>
  );
};
export default Container;
