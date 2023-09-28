export interface Cart {
  cartItems: [
    {
      _id: string;
      book: string;
      price: number;
      quantity: number;
    }
  ];
  totalCartPrice: number;
  _id: string;
}
