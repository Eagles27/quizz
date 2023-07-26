import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <span
      role="button"
      style={{
        cursor: "pointer",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

export default IconButton;
