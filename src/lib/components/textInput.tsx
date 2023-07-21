import React from "react";

interface TextInputProps {
  placeholder: string;
  customPadding?: string;
  customBorderRadius?: string;
  onInputChange: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  customPadding = "11px 47px 10px 19px",
  customBorderRadius = "20px",
  onInputChange,
  onKeyDown,
  value = "",
  disabled = false,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      style={{
        color: "#000",
        fontSize: "1.5rem",
        fontFamily: "Poppins",
        fontWeight: "250",
        lineHeight: "150%",
        background: "#FFF",
        borderRadius: customBorderRadius,
        boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.20) inset",
        padding: customPadding,
        border: "none",
        outline: "none",
        width: "80%",
      }}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
};

export default TextInput;
