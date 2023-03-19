import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';

import Routes from 'routes';

import { ListItemProps } from './types';

export const LayoutDrawerNavConfig: Array<ListItemProps> = [
  {
    name: 'Dashboard',
    path: Routes.DashboardUrl(),
    icon: <DashboardIcon />,
  },
  {
    name: 'Statistics',
    path: Routes.StatisticsUrl(),
    icon: <AnalyticsIcon />,
  },
];
