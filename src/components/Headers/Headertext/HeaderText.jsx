import { Text } from "@mantine/core";
import "./style.css";


const HeaderText = ({ children }) => {
  return (
    <div className="notice-box">
      <Text size="sm">{children}</Text>
    </div>
  );
};

export default HeaderText;
