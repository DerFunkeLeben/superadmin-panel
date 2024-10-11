import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AppsIcon from '@mui/icons-material/Apps';
import ExplicitIcon from '@mui/icons-material/Explicit';
import FlagIcon from '@mui/icons-material/Flag';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';

import { routes } from '../routes';
import { Voc } from '@/resources/navbar/constants';
import { NavBarItems } from '../types';

const navBar: NavBarItems = [
  {
    label: Voc.USERS,
    icon: <PersonIcon />,
    href: routes.users.list,
  },
  {
    label: Voc.ROLES,
    icon: <AccessibilityNewIcon />,
  },
  {
    label: Voc.GROUPS,
    icon: <GroupsIcon />,
  },
  {
    label: Voc.FEATURE_FLAGS,
    icon: <FlagIcon />,
  },
  {
    label: Voc.ENV,
    icon: <ExplicitIcon />,
  },
  {
    label: Voc.ADDITIONAL_FIELDS,
    icon: <TextIncreaseIcon />,
  },
  {
    label: Voc.PRODUCTS,
    icon: <AppsIcon />,
  },
  {
    label: Voc.PRODUCT_ENV,
    icon: <ExplicitIcon />,
  },
  {
    label: Voc.PRODUCT_FEATURE_FLAGS,
    icon: <FlagIcon />,
  },
];

export default navBar;
