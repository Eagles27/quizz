import React from "react";
import Button from "../../lib/components/button";
import TextField from "../../lib/components/textField";
import TextInput from "../../lib/components/textInput";
import { TNotionDatabaseListFiltered } from "../../types/notionDabase";

interface IProps {
  database: TNotionDatabaseListFiltered;
  color: string;
  wrongAnswer: boolean;
  rightAnswer: string;
  index: number;
  answer: string;
  refresh: () => void;
  nextQuestion: () => void;
  handleWrongAnswer: () => void;
  setAnswer: (e: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const HomeView: React.FC<IProps> = ({
  database,
  color,
  wrongAnswer,
  rightAnswer,
  index,
  answer,
  refresh,
  nextQuestion,
  handleWrongAnswer,
  setAnswer,
  handleKeyDown,
}) => {
  console.log("database", database);
  return database.length === 0 ? (
    <Button text="Refresh Data" onClick={refresh} />
  ) : (
    <div
      className="appContainer"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "70%",
          width: "100%",
        }}
      >
        {wrongAnswer ? (
          <TextField
            label={
              <>
                Falsh !<br /> <br />
                Die Antwort ist : <br />
                <span style={{ fontWeight: "bold" }}>{rightAnswer}</span>
              </>
            }
          />
        ) : (
          <TextField label={database[index].frenchWord} />
        )}

        <TextInput
          placeholder="type your anwser"
          onInputChange={(e) => setAnswer(e)}
          onKeyDown={handleKeyDown}
          value={answer}
          disabled={wrongAnswer}
        />
        {wrongAnswer ? (
          <Button text="VOLGENDE VRAAG" onClick={handleWrongAnswer} />
        ) : (
          <Button text="GÜLTIG" onClick={nextQuestion} />
        )}
      </div>
    </div>
  );
};

export default HomeView;
