import { Helmet } from 'react-helmet-async';
import { BudgetView } from 'src/sections/budget/view/budget-view';

export default function MyBudget() {
  return (
    <>
      <Helmet>
        <title>My Budget</title>
      </Helmet>
      <BudgetView />
    </>
  );
}
