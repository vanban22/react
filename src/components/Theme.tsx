import { useContext } from "react";
import { Button } from "antd";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { themeMode, toggleTheme } = themeContext;

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={toggleTheme}>theme ({themeMode})</Button>
    </div>
  );
};

export default ThemeToggle;