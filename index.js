const body = document.getElementsByTagName("body") [0];


const setColor = (name) => {
  body.style.backgroundColor = name;
}

const randomColor = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const randomBgColor = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = randomBgColor;
}
  randomColor();
