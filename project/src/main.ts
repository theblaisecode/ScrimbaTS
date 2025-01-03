import { onlyNum, populateUser, showDetails, getTopTwoReviews } from "./utils";
import "./style.css";
export const reviewTotalDisplay =
  document.querySelector<HTMLSpanElement>("#reviews");
export const recentReview =
  document.querySelector<HTMLHeadingElement>("#mostRecent");
import { Loyalty, Permissions } from "./enum";
import { Review, Properties } from "./interface";
import MainProperty from "./classes";

const allProperties = document.querySelector<HTMLDivElement>(".properties");
const reviewContainer = document.querySelector<HTMLDivElement>(".reviews");
const container = document.querySelector<HTMLDivElement>(".container");
const button = document.querySelector<HTMLButtonElement>("button");
const footer = document.querySelector<HTMLDivElement>(".footer");

let isLoggedIn: boolean;

const reviews: Review[] = [
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
  },
];

const you: {
  firstName: string;
  lastName: string;
  age: number;
  isReturning: boolean;
} = {
  firstName: "Bobby",
  lastName: "Brown",
  age: 22,
  isReturning: true,
};

// Properties
const properties: Properties[] = [
  {
    image: "https://avatars.githubusercontent.com/u/89015653?v=4",
    title: "Blaise House",
    price: 30,
    address: "123, Blaise Avenue",
    town: "Lagos",
    postcode: 23401,
    country: "Nigeria",
    contact: [+2341234567890, "blaisehouse@gmail.com"],
    forRent: true,
  },
  {
    image:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2023/06/01-Kens-DreamHouse-Airbnb-Exterior-Credit-Hogwash-Studios-2.jpg?w=2048",
    title: "Barbie's Dream House",
    price: 12,
    address: "Mansion 47",
    town: "Barbie's Palace",
    postcode: 24700,
    country: "Lala Land",
    contact: [+2345678901234, "nokensallowed@gmail.com"],
    forRent: false,
  },
  {
    image:
      "https://www.world-architects.com/images/Projects/98/85/74/cc35d868d37b48f290dc8d8cbedaa345/cc35d868d37b48f290dc8d8cbedaa345.6e7b65d0.jpg",
    title: "Mad House",
    price: 10,
    address: "74 Crazy Lane",
    town: "Nut House",
    postcode: 10654,
    country: "Asylum",
    contact: [+2348901234567, "weareallcrazy@gmail.com"],
    forRent: true,
  },
  {
    image:
      "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/malaysia/gayana-malaysia-p.jpg",
    title: "Gayana Eco Resort",
    price: 30,
    address: "Room 25",
    town: "Gayana",
    postcode: 10654,
    country: "Malaysia",
    contact: [+2348901234567, "gaayanaeco@gmail.com"],
    forRent: true,
  },
];

onlyNum(
  reviews.length,
  reviews[reviews.length - 1].name,
  reviews[reviews.length - 1].loyaltyUser
);

populateUser(you.isReturning, you.firstName);

// Functions
let authorityStatus: any;
isLoggedIn = true;

console.log(authorityStatus);

//Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;

  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);

  if (allProperties) {
    allProperties.appendChild(card);
    showDetails(isLoggedIn, card, properties[i].price);
  }
}

let currentLocation: [string, string, number] = ["Lagos", "09:11", 12];
if (footer) {
  footer.innerHTML = `Location: ${currentLocation[0]} - Time: ${currentLocation[1]} - Degrees: ${currentLocation[2]}°`;
}

// Enum
const you4 = {
  firstName: "Blaise",
  lastName: "Nwachukwu",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 22,
  stayedAt: ["Lagos", "osun", "Imo", "Anambra"],
};
console.log(you4);

//Broken code
let count = 0;
if (button) {
  button.addEventListener("click", () => addReviews(reviews));
}

function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      if (reviewContainer) {
        reviewContainer.appendChild(card);
      }
    }
    if (container) {
      container.removeChild(button);
    }
  }
}

let currentLocation2: [string, string, number] = ["London", "11.03", 17];
if (footer) {
  footer.innerHTML =
    currentLocation2[0] +
    " " +
    currentLocation2[1] +
    " " +
    currentLocation2[2] +
    "°";
}

// class Car {
//   make: string;
//   year: number;
//   color: string;
//   constructor(make: string, year: number, color: string) {
//     this.make = make;
//     this.year = year;
//     this.color = color;
//   }
// }

let yourMainProperty = new MainProperty(
  "https://worldwidelawyers.co.uk/wp/wp-content/uploads/2017/11/Tuscan-Villa-buying-property-in-Italy-624x381.jpg",
  "Italian House",
  [
    {
      name: "Blaise",
      stars: 5,
      loyaltyUser: Loyalty.GOLD_USER,
      date: "12-27- 2024",
    },
  ]
);

const mainImageContainer =
  document.querySelector<HTMLDivElement>(".main-image");
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
if (mainImageContainer) {
  mainImageContainer.appendChild(image);
}

// Styling
