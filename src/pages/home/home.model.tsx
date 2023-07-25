import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAppDispatch, TRootState } from "../../store/store";
import GenerateQuestion from "../../utils/functions/generateQuestion";
import HomeView from "./home.view";
import { fetchNotionDatabase } from "../../store/NotionSlice";
import { useParams } from "react-router-dom";

const HomeModel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

  const response = useSelector(
    (state: TRootState) => state.NotionSlice.database
  );

  const filteredResponse = response.filter((item) => item.id === id);
  console.log("filteredResponse", filteredResponse);
  const database = filteredResponse.length > 0 ? filteredResponse[0].value : [];

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

  return (
    <HomeView
      {...{
        database,
        color,
        wrongAnswer,
        rightAnswer,
        index,
        answer,
        refresh: () => void dispatch(fetchNotionDatabase({ id })),
        nextQuestion,
        handleWrongAnswer,
        setAnswer,
        handleKeyDown,
      }}
    />
  );
};

export default HomeModel;
