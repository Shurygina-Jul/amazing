import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />;
};
