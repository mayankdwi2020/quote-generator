const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const figcaption = document.querySelector("figcaption");
const button = document.querySelector("button");

//Fetching quotes
const fetchQuotes = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  console.log(data);
  //   h1.innerText = data.
  p.innerText = data.content;
  figcaption.innerText = data.author;
};

button.addEventListener("click", fetchQuotes);
