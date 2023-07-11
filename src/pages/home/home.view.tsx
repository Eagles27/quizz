import React from "react";
import Button from "../../lib/components/button";
import TextField from "../../lib/components/textField";
import TextInput from "../../lib/components/textInput";

const HomeView: React.FC = () => {
  return (
    <div
      className="appContainer"
      style={{
        width: "100vw",
        height: "100vh",
        background: "#E9D0AB",
      }}
    >
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <TextField label="Hellkdkdkdkdkdkdkdkdkdkd" />
        <TextInput placeholder="hello " onInputChange={(e) => console.log(e)} />
        <Button text="Hello World" />
      </div>
    </div>
  );
};

export default HomeView;
