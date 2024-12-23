import { onlyNum, populateUser } from "./utils";
import "./style.css";

export const reviewTotalDisplay =
  document.querySelector<HTMLSpanElement>("#reviews");

export const recentReview =
  document.querySelector<HTMLHeadingElement>("#mostRecent");

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
  contact: string;
  forRent: boolean;
}[] = [
  {
    image: "https://avatars.githubusercontent.com/u/89015653?v=4",
    title: 'Blaise House',
    price: 3000,
    address: '123, Blaise Avenue',
    town: 'Lagos',
    postcode: 23401,
    country: 'Nigeria',
    contact: 'blaisehouse@gmail.com',
    forRent: true
  },
];

onlyNum(
  reviews.length,
  reviews[reviews.length - 1].name,
  reviews[reviews.length - 1].loyaltyUser
);
populateUser(you.isReturning, you.firstName);
