import { Dispatch, ReactNode, SetStateAction } from "react";

export type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: string;
  category: string;
  date: string;
};

export type FilterComponentProps = {
  title: string;
};

export type AddComponentProps = {
  data: Transaction[];
  setData: React.Dispatch<React.SetStateAction<Transaction[]>>;
};

export type SummaryComponentProps = {
  data: Transaction[];
  title: string;
}

export interface SummaryData {
    totalIncome: number;
    totalExpenses: number;
    balance: number;
}

export interface BasicModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface TableProps {
  headerArray: string[];
  bodyArray: { id: number; category: string; description: string; amount: number }[];
}

export interface TransactionsContextType {
  data: Transaction[];
  setData: Dispatch<SetStateAction<Transaction[]>>;
  detailsViewId: number | null;
  setDetailsViewId: Dispatch<SetStateAction<number | null>>;
}

export interface TransactionsProviderProps {
  val: Transaction[];
  children: ReactNode;
}

export const transactions: Transaction[] = [
  { id: 1, description: 'Salary', amount: 5000, type: 'Income', category: 'Job', date: '2024-06-01' },
  { id: 2, description: 'Groceries', amount: -150, type: 'Expense', category: 'Food', date: '2024-06-02' },
  { id: 3, description: 'Rent', amount: -1200, type: 'Expense', category: 'Housing', date: '2024-06-03' },
  { id: 4, description: 'Electricity Bill', amount: -80, type: 'Expense', category: 'Utilities', date: '2024-06-04' },
  { id: 5, description: 'Internet Bill', amount: -50, type: 'Expense', category: 'Utilities', date: '2024-06-05' },
  { id: 6, description: 'Dining Out', amount: -60, type: 'Expense', category: 'Entertainment', date: '2024-06-06' },
  { id: 7, description: 'Gym Membership', amount: -40, type: 'Expense', category: 'Health', date: '2024-06-07' },
  { id: 8, description: 'Fuel', amount: -70, type: 'Expense', category: 'Transportation', date: '2024-06-08' },
  { id: 9, description: 'Public Transport', amount: -25, type: 'Expense', category: 'Transportation', date: '2024-06-09' },
  { id: 10, description: 'Books', amount: -30, type: 'Expense', category: 'Education', date: '2024-06-10' },
  { id: 11, description: 'Insurance', amount: -200, type: 'Expense', category: 'Health', date: '2024-06-11' },
  { id: 12, description: 'Movie Ticket', amount: -15, type: 'Expense', category: 'Entertainment', date: '2024-06-12' },
  { id: 13, description: 'Pet Food', amount: -35, type: 'Expense', category: 'Pets', date: '2024-06-13' },
  { id: 14, description: 'Clothing', amount: -100, type: 'Expense', category: 'Shopping', date: '2024-06-14' },
  { id: 15, description: 'Laundry Service', amount: -20, type: 'Expense', category: 'Household', date: '2024-06-15' },
  { id: 16, description: 'Doctor Visit', amount: -150, type: 'Expense', category: 'Health', date: '2024-06-16' },
  { id: 17, description: 'Pharmacy', amount: -45, type: 'Expense', category: 'Health', date: '2024-06-17' },
  { id: 18, description: 'Home Repair', amount: -250, type: 'Expense', category: 'Household', date: '2024-06-18' },
  { id: 19, description: 'Phone Bill', amount: -40, type: 'Expense', category: 'Utilities', date: '2024-06-19' },
  { id: 20, description: 'Streaming Subscription', amount: -10, type: 'Expense', category: 'Entertainment', date: '2024-06-20' }
];