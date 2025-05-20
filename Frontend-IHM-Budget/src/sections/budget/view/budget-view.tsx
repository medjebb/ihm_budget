import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { DashboardContent } from 'src/layouts/dashboard';
import { CapexOpexWidget } from '../budget-widget-capex-opex/capex-opex-widget';

export function BudgetView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={4} md={4}>
          <CapexOpexWidget title="CAPEX" total={71400} currency="K$" />
        </Grid>
        <Grid xs={12} sm={4} md={4}>
          <CapexOpexWidget title="OPEX" total={41040} currency="K$" color="secondary" />
        </Grid>
        <Grid xs={12} sm={4} md={4}>
          <CapexOpexWidget title="OPEX REFAC" total={7040} currency="K$" color="warning" />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
