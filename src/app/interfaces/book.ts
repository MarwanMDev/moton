export interface Book {
  authorName: string;
  bookName: string;
  bookSize: string;
  category: {
    name: string;
  };
  createdAt: string;
  delivaryPrice: number;
  description: string;
  pdf: string;
  editionOfBook: string;
  image: string;
  language: string;
  numberOfCovers: string;
  price: number;
  publicationDate: string;
  publisherName: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  slug: string;
  sold: number;
  type: string;
  updatedAt: string;
  _id: string;
}
