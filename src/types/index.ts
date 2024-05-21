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
