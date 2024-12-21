import "./style.css";

// Number Types mini-challenge
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.

// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.

export const reviewTotalDisplay =
  document.querySelector<HTMLSpanElement>("#reviews");

export const recentReview =
  document.querySelector<HTMLHeadingElement>("#mostRecent");

const returningUserDisplay =
  document.querySelector<HTMLSpanElement>("#returning-user");

const userNameDisplay = document.querySelector<HTMLSpanElement>("#user");

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

function onlyNum(reviewAmount: number, recent: string, loyalty: boolean) {
  if (reviewTotalDisplay) {
    reviewTotalDisplay.innerHTML = `Number of reviews: ${reviewAmount.toString()}`;
  }

  if (recentReview) {
    recentReview.innerHTML = `Most recent review ${recent} | ${
      loyalty ? "⭐" : "🚫"
    }`;
  }

  return;
}

onlyNum(
  reviews.length,
  reviews[reviews.length - 1].name,
  reviews[reviews.length - 1].loyaltyUser
);

const you = {
  userName: {
    firstName: "Bobby",
    lastName: "Brown",
  },
  isReturning: true,
};

function populateUser(returning: boolean, user: string) {
  if (returning && returningUserDisplay) {
    returningUserDisplay.innerHTML = "back,";
  }

  if (userNameDisplay) {
    userNameDisplay.innerHTML = user;
  }
}

populateUser(you.isReturning, you.userName.firstName);
