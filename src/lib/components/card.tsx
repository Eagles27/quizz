import React from "react";

interface CardProps {
  title: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, onClick }) => {
  const styles: React.CSSProperties = {
    height: "65px",
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "10px",
    overflow: "hidden",
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#000",
    marginBottom: "10px",
  };

  return (
    <button
      type="button"
      className="promptCard"
      style={{
        ...styles,
      }}
      onClick={onClick}
    >
      <div
        className="textContainer"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="title"
          style={{
            fontSize: "18px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            textAlign: "center",
          }}
        >
          {title}
        </div>
      </div>
    </button>
  );
};

export default Card;
