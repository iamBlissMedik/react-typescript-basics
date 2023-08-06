import Login from "./Login";
import { ProfileProps } from "./Profile";
type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private: React.FC<PrivateProps> = ({
  isLoggedIn,
  component: Component,
}) => {
  if (isLoggedIn) {
    return <Component name="bliss" />;
  } else {
    return <Login />;
  }
};
export default Private;
