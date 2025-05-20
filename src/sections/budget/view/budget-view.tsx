import { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { BudgetForm } from '../budget-form/budget-form';
import { BudgetList } from '../budget-list/budget-list';
import { BudgetSummaryView } from '../budget-summary/budget-summary';
import { BudgetChart } from '../budget-chart/budget-chart';
import { RootState } from 'src/redux/store';
import { addBudgetItem, deleteBudgetItem, fetchBudgetItems } from 'src/redux/slices/budgetSlice';
import { BudgetItem } from 'src/model/budget';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function BudgetView() {
  const dispatch = useDispatch();
  const { items, summary, loading, error } = useSelector((state: RootState) => state.budget);

  useEffect(() => {
    dispatch(fetchBudgetItems() as any);
  }, [dispatch]);

  const handleAddItem = (item: BudgetItem) => {
    dispatch(addBudgetItem(item));
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteBudgetItem(id));
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Budget Planning
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <BudgetSummaryView summary={summary} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Box sx={{ mb: 3 }}>
            <BudgetChart items={items} />
          </Box>
        </motion.div>

        <motion.div variants={itemVariants}>
          <BudgetForm onSubmit={handleAddItem} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <BudgetList items={items} onDelete={handleDeleteItem} />
        </motion.div>
      </motion.div>
    </Container>
  );
}