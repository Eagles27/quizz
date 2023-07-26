import React from "react";
import Button from "../../lib/components/button";
import TextField from "../../lib/components/textField";
import TextInput from "../../lib/components/textInput";
import { TNotionDatabaseListFiltered } from "../../types/notionDabase";
import IconButton from "../../lib/components/iconButton";
import RefreshIcon from "../../icons/refreshIcon";
import BackArrowIcon from "../../icons/backArrowIcon";
import { Link } from "react-router-dom";
import Loader from "../../lib/components/loader";

interface IProps {
  database: TNotionDatabaseListFiltered;
  color: string;
  wrongAnswer: boolean;
  rightAnswer: string;
  index: number;
  answer: string;
  isLoading: boolean;
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
  isLoading,
  refresh,
  nextQuestion,
  handleWrongAnswer,
  setAnswer,
  handleKeyDown,
}) => {
  return database.length === 0 ? (
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
        <TextField
          label={
            <>
              Kein Inhalt verfügbar <br /> Bitte tippen Sie auf die Schaltfläche
              unten
            </>
          }
        />
        {isLoading ? (
          <Loader />
        ) : (
          <Button text="Daten aktualisieren" onClick={refresh} />
        )}

        <Link to={"/quizz"}>
          <IconButton icon={<BackArrowIcon />} />
        </Link>
      </div>
    </div>
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
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <Button text="GÜLTIG" onClick={nextQuestion} />
            )}
          </>
        )}
        <div
          className="bottomBar"
          style={{
            position: "fixed",
            bottom: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link to={"/quizz"}>
            <IconButton icon={<BackArrowIcon />} />
          </Link>
          <IconButton icon={<RefreshIcon />} onClick={refresh} />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
