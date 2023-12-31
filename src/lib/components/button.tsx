interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const styles = {
    display: "flex",
    minWidth: "300px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    background: "#FFF",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    fontSize: "28px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    color: "#000",
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.12px",
    transition: "background 0.3s ease",
  };
  return (
    <button style={{ ...styles }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
