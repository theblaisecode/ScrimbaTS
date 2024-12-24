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
    reviewTotalDisplay.innerHTML = `Number of reviews: ${reviewAmount.toString()}`;
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

function add(firstValue, secondValue) {
  let result;
  if (typeof firstValue === "number" && typeof secondValue === "number") {
    result = firstValue + secondValue;
  }
  if (typeof firstValue === "string" && typeof secondValue === "string") {
    result = firstValue + " " + secondValue;
  }
  if (typeof firstValue === "number" && typeof secondValue === "string") {
    console.log("cannot perform this addition");
  }
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    console.log("cannot perform this addition");
  }
}
