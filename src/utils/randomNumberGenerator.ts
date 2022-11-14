const randomNumber = (from: number, to: number) => {

  const random = Math.random();

  return random * (from - to) + to;

};

export default randomNumber;