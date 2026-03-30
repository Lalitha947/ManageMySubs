export interface Subscription {
  _id: string;
  name: string;
  frequency: 'monthly' | 'yearly';
  price: number;
  nextPaymentDate: string;
  category: string;
  user: string;  reminderEnabled: boolean;
  reminderDaysBefore: number;  createdAt: string;
  updatedAt: string;
}