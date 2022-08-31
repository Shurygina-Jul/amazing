export interface IItem {
  id: number;
  author: string;
  date: string;
  description: string;
  title: string;
  // type: {
  //   value: "prompt" | "note";
  //   label: "напоминание" | "заметка";
  // };
  type: any;
}
