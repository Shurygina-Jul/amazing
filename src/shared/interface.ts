export interface ITask {
  date: number | string;
  title: string;
  id: number;
  description: string;
  done: boolean;
  timestamp: any;
  category: { label: string; value: string };
}
