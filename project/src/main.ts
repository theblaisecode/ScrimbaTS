import { onlyNum, populateUser } from "./utils";
import "./style.css";

export const reviewTotalDisplay =
  document.querySelector<HTMLSpanElement>("#reviews");

export const recentReview =
  document.querySelector<HTMLHeadingElement>("#mostRecent");

const allProperties = document.querySelector<HTMLDivElement>(".properties");

let isOpen: boolean;

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
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
const properties: {
  image: string;
  title: string;
  price: number;
  address: string;
  town: string;
  postcode: number;
  country: string;
  contact: [number, string];
  forRent: boolean;
}[] = [
  {
    image: "https://avatars.githubusercontent.com/u/89015653?v=4",
    title: "Blaise House",
    price: 3000,
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
    price: 1200,
    address: "Mansion 47",
    town: "Barbie's Palace",
    postcode: 24700,
    country: "Lala Land",
    contact: [+2345678901234, "nokensallowed@gmail.com"],
    forRent: false,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsO1TQ619-vp_ZAKK4L8Mda-FAWf2GOgP7Qw&s",
    title: "Mad House",
    price: 100,
    address: "74 Crazy Lane",
    town: "Nut House",
    postcode: 10654,
    country: "Asylum",
    contact: [+2348901234567, "weareallcrazy@gmail.com"],
    forRent: true,
  },
];

onlyNum(
  reviews.length,
  reviews[reviews.length - 1].name,
  reviews[reviews.length - 1].loyaltyUser
);

populateUser(you.isReturning, you.firstName);

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
  }
}
