import "./styles/index.scss";

const clothes = {
  shoes: 2,
  shirts: 4,
  pants: 1,
};

const things = {
  ...clothes,
  table: 4,
  glass: 7,
};

console.log(things);
