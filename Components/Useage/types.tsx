export interface UsageProps {
  id: number;
  title: string;
  substitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: string;
  };
}

export interface UsageSectionProps {
  data: Array<UsageProps>;
}

export interface UsageAVIProps {
  icon: any;
  background: string;
}
