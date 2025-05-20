import { Card, CardHeader } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { BudgetItem } from 'src/model/budget';

interface BudgetChartProps {
  items: BudgetItem[];
}

export function BudgetChart({ items }: BudgetChartProps) {
  const chartData = {
    series: [
      {
        name: 'Income',
        data: items
          .filter((item) => item.type === 'income')
          .map((item) => ({ x: new Date(item.date).getTime(), y: item.amount })),
      },
      {
        name: 'Expenses',
        data: items
          .filter((item) => item.type === 'expense')
          .map((item) => ({ x: new Date(item.date).getTime(), y: item.amount })),
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          text: 'Amount ($)',
        },
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy',
        },
      },
      colors: ['#22C55E', '#FF5630'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100],
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader title="Budget Overview" />
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </Card>
  );
}