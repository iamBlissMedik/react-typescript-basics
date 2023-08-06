import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

const User: React.FC = () => {
  //   const [user, setUser] = useState<null | AuthUser>(null);
  // or type assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Bliss",
      email: "ellams@example.com",
    });
  };
  const handleLogout = () => {};
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is </div>
    </div>
  );
};
export default User;
