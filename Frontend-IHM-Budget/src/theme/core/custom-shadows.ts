import { varAlpha } from '../styles';
import { grey} from './palette';


export interface CustomShadows {
  z8?: string;
  
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
  }
}


export function createShadowColor(colorChannel: string) {
  return `0 8px 16px 0 ${varAlpha(colorChannel, 0.24)}`;
}

export function customShadows() {
  const colorChannel = grey['500Channel'];

  return {

    z8: `0 8px 16px 0 ${varAlpha(colorChannel, 0.16)}`,
  };
}
