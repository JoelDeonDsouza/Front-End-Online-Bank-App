import { ImageSourcePropType } from "react-native";

export interface VirtualCardsProps {
  id: number;
  accountNO: string;
  balance: number;
  name: string;
  ifFreature?: string;
  logo: ImageSourcePropType;
}

export interface VirtualCardsSectionProps {
  data: Array<VirtualCardsProps>;
}
