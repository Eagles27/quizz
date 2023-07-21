import React from "react";
import Button from "../../lib/components/button";
import TextField from "../../lib/components/textField";
import TextInput from "../../lib/components/textInput";
import { useSelector } from "react-redux";
import { TRootState, useAppDispatch } from "../../store/store";
import { fetchNotionDatabase } from "../../store/NotionSlice";
import GenerateQuestion from "../../utils/functions/generateQuestion";
import { toast } from "react-toastify";

const HomeView: React.FC = () => {
  const dispatch = useAppDispatch();

  const database = useSelector(
    (state: TRootState) => state.NotionSlice.database
  );

  const [index, setIndex] = React.useState(GenerateQuestion(database.length));
  const [answer, setAnswer] = React.useState("");
  const [rightAnswer, setRightAnswer] = React.useState("");
  const [color, setColor] = React.useState("#E9D0AB");
  const [wrongAnswer, setWrongAnswer] = React.useState(false);

  const handleWrongAnswer = () => {
    setWrongAnswer(false);
    setAnswer("");
    setColor("#E9D0AB");
  };

  const nextQuestion = () => {
    const isAnswerCorrect = database[index].deutshWord === answer.trim();
    if (answer.trim() === "") {
      toast.error("Please type your answer");
      return;
    }
    if (isAnswerCorrect) {
      toast.success("Correct answer");
      setColor("#E9D0AB");
      setAnswer("");
    } else {
      setRightAnswer(database[index].deutshWord);
      setWrongAnswer(true);
      setColor("#F86E6E");
    }

    setIndex(GenerateQuestion(database.length));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextQuestion();
    }
  };

  return database.length === 0 ? (
    <Button
      text="Refresh Data"
      onClick={void dispatch(fetchNotionDatabase())}
    />
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
