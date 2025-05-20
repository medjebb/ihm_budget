export interface BudgetItem {
  id: string;
  category: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
}

export interface BudgetSummary {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
}