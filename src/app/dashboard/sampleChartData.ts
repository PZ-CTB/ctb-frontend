import { StockChartData } from './components/chart/types';

const startDate = new Date('2023-03-01');
const endDate = new Date('2023-03-15');

const generateData = (): StockChartData[] => {
  const data: StockChartData[] = [];
  const currentDate = startDate;

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString().slice(0, 10);
    const avg = Math.floor(Math.random() * 1000) + 5000;
    const low = Math.floor(avg + Math.random() * avg * 0.05 * -1);
    const high = Math.floor(avg + Math.random() * avg * 0.05);
    data.push({ date: formattedDate, avg, low, high });
    // data.push({ date: formattedDate, avg });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const data = generateData();
export default data;
