export interface MonthlyWord {
  id: string;
  title: string;
  verse: string;
  message: string;
  image: string;
  date: string;
}

export interface WeeklyPrayer {
  id: string;
  title: string;
  prayer: string;
  verse: string;
  week: number;
  date: string;
}