import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import AdminWriteUI from "./AdminWrite.persenter";
import { CREATE_ROOM } from "./AdminWrite.queries";

export default function AdminWrite() {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [createRoom] = useMutation(CREATE_ROOM);

  const onClickSubmit = async (data) => {
    console.log("123");
    console.log(data);
    await createRoom({
      variables: {
        createRoom: {
          ...data,
        },
      },
    });
  };

  return (
    <AdminWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
    />
  );
}
