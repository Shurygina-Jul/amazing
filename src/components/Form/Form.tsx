import { INPUTS } from "components/CreateForm/constants";
import LabelInput from "components/UI/LabelInput";
import { TextInput } from "components/UI/TextInput";
import { useEvent, useStore } from "effector-react";
import Select from "react-select";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  $messageText,
  $messageSending,
  messageTextChanged,
  messageEnterPressed,
  messageSendClicked,
} from "store/model";
import Button from "components/UI/Button";

function SendMessage() {
  const messageText = useStore($messageText);
  const messageSending = useStore($messageSending);

  const handleTextChange = useEvent(messageTextChanged);
  const handleEnterPress = useEvent(messageEnterPressed);
  const handleSendClick = useEvent(messageSendClicked);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleEnterPress();
    }
  };

  return (
    <div className="message-form">
      <input
        value={messageText}
        onChange={(event) => handleTextChange(event.target.value)}
        onKeyPress={handleKeyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={() => handleSendClick()} disabled={messageSending}>
        {messageSending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

export default SendMessage;

// function CreateTaskForm() {
//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors, isDirty },
//   } = useForm<any>();

//   const onSubmit: SubmitHandler<any> = (data) => {
//     data.id = Math.floor(Math.random() * 1000);
//     console.log("Заметка успешно создана");
//   };

//   // function getOptions(): IOption[] {
//   //   return getData("category");
//   // }

//   return (
//     <>
//       <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
//         <fieldset>
//           <legend>
//             <h3>Cоздать заметку или напоминание</h3>
//           </legend>

//           <>
//             {INPUTS.map(({ label, name }, i: number) => (
//               <LabelInput label={label} errors={errors[name]} key={`${name}_${i}`}>
//                 <TextInput
//                   {...register(`${name}`, {
//                     required: true,
//                   })}
//                 />
//               </LabelInput>
//             ))}
//             <LabelInput errors={errors.title}>
//               <Controller
//                 name="type"
//                 control={control}
//                 render={({ field }) => (
//                   <Select
//                     {...field}
//                     placeholder="Выберите категорию"
//                     className="mb-4 w-[240px]"
//                     // options={getOptions()}
//                   />
//                 )}
//               />
//             </LabelInput>
//           </>
//           <div className="inline-block rounded-lg bg-lazur text-smoke">
//             <Button text="Добавить" type="submit" className="rounded-lg" disabled={!isDirty} />
//           </div>
//         </fieldset>
//       </form>
//     </>
//   );
// }

// export default CreateTaskForm;
