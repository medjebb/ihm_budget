import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { BudgetItem } from 'src/model/budget';

interface BudgetFormProps {
  onSubmit: (item: BudgetItem) => void;
}

export function BudgetForm({ onSubmit }: BudgetFormProps) {
  const [formData, setFormData] = useState<Partial<BudgetItem>>({
    type: 'expense',
    category: '',
    description: '',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.category && formData.amount && formData.type) {
      onSubmit({
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
      } as BudgetItem);
      setFormData({
        type: 'expense',
        category: '',
        description: '',
        amount: 0,
        date: new Date().toISOString().split('T')[0],
      });
    }
  };

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Add New Budget Item
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            label="Type"
            onChange={(e) => setFormData({ ...formData, type: e.target.value as 'income' | 'expense' })}
          >
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />

        <TextField
          fullWidth
          label="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />

        <TextField
          fullWidth
          type="number"
          label="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
        />

        <TextField
          fullWidth
          type="date"
          label="Date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />

        <Button type="submit" variant="contained" size="large">
          Add Item
        </Button>
      </Box>
    </Card>
  );
}