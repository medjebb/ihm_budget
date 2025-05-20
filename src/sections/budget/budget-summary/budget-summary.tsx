import { Grid, Card, Typography, Stack } from '@mui/material';
import { BudgetSummary } from 'src/model/budget';

interface BudgetSummaryProps {
  summary: BudgetSummary;
}

export function BudgetSummaryView({ summary }: BudgetSummaryProps) {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Total Income
            </Typography>
            <Typography variant="h4" sx={{ color: 'success.main' }}>
              ${summary.totalIncome.toFixed(2)}
            </Typography>
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Total Expenses
            </Typography>
            <Typography variant="h4" sx={{ color: 'error.main' }}>
              ${summary.totalExpenses.toFixed(2)}
            </Typography>
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={1}>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              Balance
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: summary.balance >= 0 ? 'success.main' : 'error.main' }}
            >
              ${summary.balance.toFixed(2)}
            </Typography>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}