export const reviewTotalDisplay =
  document.querySelector<HTMLSpanElement>("#reviews");
const returningUserDisplay =
  document.querySelector<HTMLSpanElement>("#returning-user");
const userNameDisplay = document.querySelector<HTMLSpanElement>("#user");
export const recentReview =
  document.querySelector<HTMLHeadingElement>("#mostRecent");

export function onlyNum(
  reviewAmount: number,
  recent: string,
  loyalty: boolean
) {
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

export function populateUser(returning: boolean, user: string) {
  if (returning && returningUserDisplay) {
    returningUserDisplay.innerHTML = "back,";
  }

  if (userNameDisplay) {
    userNameDisplay.innerHTML = user;
  }
}
