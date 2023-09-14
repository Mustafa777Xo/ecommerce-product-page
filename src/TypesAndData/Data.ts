export const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

import img1 from "@/assets/product/image-product-1.jpg";
import thumb1 from "@/assets/product/image-product-1-thumbnail.jpg";

import img2 from "@/assets/product/image-product-2.jpg";
import thumb2 from "@/assets/product/image-product-2-thumbnail.jpg";

import img3 from "@/assets/product/image-product-3.jpg";
import thumb3 from "@/assets/product/image-product-3-thumbnail.jpg";

import img4 from "@/assets/product/image-product-4.jpg";
import thumb4 from "@/assets/product/image-product-4-thumbnail.jpg";

export const productImages = [
  {
    id: 0,
    img: img1,
    thumbnail: thumb1,
  },
  {
    id: 1,
    img: img2,
    thumbnail: thumb2,
  },
  {
    id: 2,
    img: img3,
    thumbnail: thumb3,
  },
  {
    id: 3,
    img: img4,
    thumbnail: thumb4,
  },
];
export interface itemInfo {
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
  img:string
}