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

// Next up