import Card from "../../lib/components/card";
import test from "../../../public/data.json";
import { Link } from "react-router-dom";

const MenuView: React.FC = () => {
  return (
    <div
      className="appContainer"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80%",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "52px", fontFamily: "" }}>Lernen 🤓</h1>
        <div
          className="ScrollContainer"
          style={{
            maxHeight: "225px",
            width: "90%",
            overflowY: "scroll",
          }}
        >
          {test.map((item) => (
            <Link to={`/quizz/${item.databaseId}`} key={item.databaseId}>
              <Card title={item.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuView;
