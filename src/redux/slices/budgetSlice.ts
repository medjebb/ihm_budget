import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BudgetItem, BudgetSummary } from 'src/model/budget';

interface BudgetState {
  items: BudgetItem[];
  summary: BudgetSummary;
  loading: boolean;
  error: string | null;
}

const initialState: BudgetState = {
  items: [],
  summary: {
    totalIncome: 0,
    totalExpenses: 0,
    balance: 0,
  },
  loading: false,
  error: null,
};

// Mock API call
const mockFetchBudgetItems = async (): Promise<BudgetItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          category: 'Salary',
          description: 'Monthly salary',
          amount: 5000,
          type: 'income',
          date: '2024-01-01',
        },
        {
          id: '2',
          category: 'Rent',
          description: 'Office rent',
          amount: 1500,
          type: 'expense',
          date: '2024-01-05',
        },
      ]);
    }, 1000);
  });
};

export const fetchBudgetItems = createAsyncThunk(
  'budget/fetchBudgetItems',
  async () => {
    const response = await mockFetchBudgetItems();
    return response;
  }
);

const calculateSummary = (items: BudgetItem[]): BudgetSummary => {
  const totalIncome = items
    .filter((item) => item.type === 'income')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpenses = items
    .filter((item) => item.type === 'expense')
    .reduce((sum, item) => sum + item.amount, 0);

  return {
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses,
  };
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudgetItem: (state, action: PayloadAction<BudgetItem>) => {
      state.items.push(action.payload);
      state.summary = calculateSummary(state.items);
    },
    deleteBudgetItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.summary = calculateSummary(state.items);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBudgetItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBudgetItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.summary = calculateSummary(action.payload);
      })
      .addCase(fetchBudgetItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch budget items';
      });
  },
});

export const { addBudgetItem, deleteBudgetItem } = budgetSlice.actions;
export default budgetSlice.reducer;