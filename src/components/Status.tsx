import { StatusProps } from "../types/status";

const Status: React.FC<StatusProps> = ({ status }) => {
  let message;
  if (status === "loading") {
    message = "loading...";
  } else if (status === "success") {
    message = "Data fetched successfully";
  } else if (status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>status - {message}</h2>
    </div>
  );
};
export default Status;
