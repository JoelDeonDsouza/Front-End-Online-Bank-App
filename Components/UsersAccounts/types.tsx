import { ImageSourcePropType } from "react-native";

export interface UserAccountProps {
  id: number;
  name: string;
  amount: string;
  background: string;
  img: ImageSourcePropType;
}
export interface UserSectionProps {
  data: Array<UserAccountProps>;
}
