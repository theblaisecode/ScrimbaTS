import { Loyalty } from "./enum";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
}