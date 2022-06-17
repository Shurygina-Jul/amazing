export interface IItem {
  author: string;
  date: string;
  description: string;
  title: string;
  type: {
    value: "prompt" | "note";
    label: "напоминание" | "заметка";
  };
}
