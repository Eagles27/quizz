const GenerateQuestion = (DatabaseLenght: number): number => {
  return Math.floor(Math.random() * DatabaseLenght);
};

export default GenerateQuestion;
