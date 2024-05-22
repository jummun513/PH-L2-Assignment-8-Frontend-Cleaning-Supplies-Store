import { StaticImageData } from "next/image";

export type Product = {
  _id: string;
  title: string;
  desc: string;
  price: number;
  rating: number;
  category: string;
  isTrending: boolean;
  isFlashSale: boolean;
  isCarousel: boolean;
  image: { url: string; publicId: string };
};

export type CategoryItem = {
  id: string;
  title: string;
  image: StaticImageData;
};

export type ItemId = {
  params: {
    itemId: string;
  };
};
