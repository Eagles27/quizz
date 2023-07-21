import { ReactNode } from "react";

interface TextFieldProps {
  label: ReactNode;
}

const TextField: React.FC<TextFieldProps> = ({ label }) => {
  return (
    <div
      className="textFieldContent"
      style={{
        background: "#FFF",
        minHeight: "200px",
        minWidth: "300px",
        maxWidth: "330px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
        textOverflow: "ellipsis",
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        fontSize: "1.5rem",
        textAlign: "center",
      }}
    >
      <label>{label}</label>
    </div>
  );
};

export default TextField;
