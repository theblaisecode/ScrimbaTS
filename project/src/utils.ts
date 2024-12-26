export const reviewTotalDisplay =
  document.querySelector<HTMLSpanElement>("#reviews");
const returningUserDisplay =
  document.querySelector<HTMLSpanElement>("#returning-user");
const userNameDisplay = document.querySelector<HTMLSpanElement>("#user");
export const recentReview =
  document.querySelector<HTMLHeadingElement>("#mostRecent");
import { Loyalty } from "./enum";

export function onlyNum(
  reviewAmount: number,
  recent: string,
  loyalty: Loyalty
) {
  if (reviewTotalDisplay) {
    reviewTotalDisplay.innerHTML = `${reviewAmount.toString()} Review${makeMultiple(
      reviewAmount
    )}`;
  }

  if (recentReview) {
    recentReview.innerHTML = `Most recent review ${recent} | ${
      Loyalty.SILVER_USER ? "⭐" : "🚫"
    }`;
  }

  return;
}

export function populateUser(returning: boolean, user: string) {
  if (returning && returningUserDisplay) {
    returningUserDisplay.innerHTML = "back,";
  }

  if (userNameDisplay) {
    userNameDisplay.innerHTML = user;
  }
}

export function showDetails(
  authorityStatus: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = `$${price.toString()} / night`;
    element.appendChild(priceDisplay);
  }
}

function add(firstValue: number, secondValue: number): number {
  return firstValue + secondValue;
}

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
  description?: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: Loyalty.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: Loyalty.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: Loyalty.SILVER_USER,
    date: "27-03-2021",
    description: "Awesome host and loction",
  },
];

// Broken code
export function getTopTwoReviews(
  reviews: {
    name: string;
    stars: number;
    loyaltyUser: Loyalty;
    date: string;
  }[]
):{ name: string; stars: number; loyaltyUser: Loyalty; date: string }[]
{
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
