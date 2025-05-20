import { useState, useCallback, useMemo } from 'react';
import { Container, Typography } from '@mui/material';
import { BudgetItem, BudgetSummary } from 'src/model/budget';
import { BudgetForm } from '../budget-form/budget-form';
import { BudgetList } from '../budget-list/budget-list';
import { BudgetSummaryView } from '../budget-summary/budget-summary';

export function BudgetView() {
  const [items, setItems] = useState<BudgetItem[]>([]);

  const handleAddItem = useCallback((item: BudgetItem) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const handleDeleteItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const summary: BudgetSummary = useMemo(() => {
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
  }, [items]);

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Budget Planning
      </Typography>

      <BudgetSummaryView summary={summary} />
      <BudgetForm onSubmit={handleAddItem} />
      <BudgetList items={items} onDelete={handleDeleteItem} />
    </Container>
  );
}