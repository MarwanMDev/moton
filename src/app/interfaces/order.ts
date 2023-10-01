import { CartItem } from './cartItem';
import { shippingAddress } from './shippingAddress';
import { User } from './user';

export interface IOrder {
  user: User;
  cartItems: CartItem[];
  taxPrice: number;
  shippingAddress: shippingAddress;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
  _id: string;
  createdAt: Date;
}
