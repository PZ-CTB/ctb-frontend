import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';

import Routes from 'routes';

import { ListItemProps } from './types';

export const LayoutDrawerNavConfig: Array<ListItemProps> = [
  {
    name: 'Dashboard',
    path: Routes.Dashboard(),
    icon: <DashboardIcon />,
  },
  {
    name: 'Statistics',
    path: Routes.Statistics(),
    icon: <AnalyticsIcon />,
  },
];
