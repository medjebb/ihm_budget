import { SvgColor } from 'src/components/svg-color';
import {
  AccountBalanceWalletRounded,
  AddCircleRounded,
  DriveFileRenameOutlineRounded,
  IndeterminateCheckBoxRounded,
  OfflinePinRounded,
  RemoveCircleRounded,
  ReplyAllRounded,
  SpaceDashboardRounded,
} from '@mui/icons-material';

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'My Budget',
    path: '/',
    icon: AccountBalanceWalletRounded,
  },
  {
    title: 'Referentiel',
    path: '/reference',
    icon: AccountBalanceWalletRounded,
  },
  {
    title: 'Ajout',
    path: '/Ajout',
    icon: AddCircleRounded,
  },
  {
    title: 'Matrice',
    path: '/Matrice',
    icon: SpaceDashboardRounded,
  },
  {
    title: 'Reduction',
    path: '/Reduction',
    icon: RemoveCircleRounded,
  },
  {
    title: 'Transfert',
    path: '/Transfert',
    icon: ReplyAllRounded,
  },
  {
    title: 'Validation transfert',
    path: '/Validation',
    icon: OfflinePinRounded,
  },
  {
    title: "Demande d'activité",
    path: '/DemandeActivite',
    icon: DriveFileRenameOutlineRounded,
  },
];
