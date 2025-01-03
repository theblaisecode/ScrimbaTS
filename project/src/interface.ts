import { Loyalty } from "./enum";
import { Price, Country } from "./types";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
}

export interface Properties {
  image: string;
  title: string;
  price: Price;
  address: string;
  town: string;
  postcode: number | string;
  country: Country;
  contact: [number, string];
  forRent: boolean;
}