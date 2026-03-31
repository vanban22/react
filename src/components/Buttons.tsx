import { useContext } from "react";
import { Button } from "antd";
import { UserContext } from "../context/UserContext";

const AuthButtons = () => {
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const { setUser } = userContext;

  const handleLogin = () => {
    setUser({
      name: "Ban",
      avatar: "https://i.pravatar.cc/150?img=12",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ padding: 20, display: "flex", gap: 12 }}>
      <Button type="primary" onClick={handleLogin}>
        Login 
      </Button>

      <Button danger onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default AuthButtons;