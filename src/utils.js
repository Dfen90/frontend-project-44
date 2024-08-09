function getRandomInt(a, b = 0) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return min + Math.floor(Math.random() * (max - min));
  }

export default getRandomInt;
