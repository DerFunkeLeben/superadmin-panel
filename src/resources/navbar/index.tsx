import CalendarMonth from '@mui/icons-material/CalendarMonth';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

import { Voc } from '@/resources/navbar/constants';
import { routesSurveys } from '@/resources/routes/surveys';
import { routesUserEvents } from '@/resources/routes/userEvents';
import { routesVisits } from '@/resources/routes/visits';
import { NavBarItem } from './types';

const visits: NavBarItem = {
  label: Voc.VISIT_ACTIVITY,
  icon: <CalendarMonth />,
  children: [
    {
      label: Voc.VISIT_LIST,
      href: routesVisits.list,
    },
    {
      label: Voc.FOLLOWUP_VISIT_LIST,
      href: routesUserEvents.FOLLOWUP_EVENT.list,
    },
    {
      label: Voc.JOINT_VISIT_LIST,
      href: routesUserEvents.JOINT_EVENT.list,
    },
  ],
};

const statistic: NavBarItem = {
  label: Voc.STATISTIC,
  icon: <SignalCellularAltIcon />,
  children: [
    {
      label: Voc.DASHBOARDS,
      isDisabled: true,
      // href: routesUsers.statistic,
    },
    {
      label: Voc.EXPORT,
      isDisabled: true,
      // href: routesUsers.statistic,
    },
  ],
};

const surveys: NavBarItem = {
  label: Voc.SURVEYS,
  icon: <QuestionAnswerIcon />,
  children: [
    {
      label: Voc.TEMPLATE_LIST,
      href: routesSurveys.list,
    },
  ],
};

const navBar = {
  statistic,
  visits,
  surveys,
};

export default navBar;
