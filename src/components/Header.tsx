import { useContext } from "react";
import { Avatar } from "antd";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const { user } = userContext;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px 24px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2 style={{ margin: 0 }}>My App</h2>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {user ? (
          <>
            <Avatar src={user.avatar} />
            <span>{user.name}</span>
          </>
        ) : (
          <span>Chưa đăng nhập</span>
        )}
      </div>
    </div>
  );
};

export default Header;