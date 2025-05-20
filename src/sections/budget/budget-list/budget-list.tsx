import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import { Iconify } from 'src/components/iconify';
import { BudgetItem } from 'src/model/budget';

interface BudgetListProps {
  items: BudgetItem[];
  onDelete: (id: string) => void;
}

export function BudgetList({ items, onDelete }: BudgetListProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: item.type === 'income' ? 'success.main' : 'error.main',
                  }}
                >
                  {item.type}
                </Typography>
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell align="right">
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: item.type === 'income' ? 'success.main' : 'error.main',
                  }}
                >
                  ${item.amount.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onDelete(item.id)} color="error">
                  <Iconify icon="eva:trash-2-outline" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}