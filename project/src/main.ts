import "./style.css";

// Number Types mini-challenge
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
export const reviewTotalDisplay =
  document.querySelector<HTMLSpanElement>("#reviews");

const reviews = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

function onlyNum(reviewAmount: number) {
  if (reviewTotalDisplay) {
    reviewTotalDisplay.innerHTML = reviewAmount.toString();
  }
  return;
}

onlyNum(reviews.length);
