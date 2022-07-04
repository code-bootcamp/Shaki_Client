import LogInPresenter from "./LogInPresenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function LogInContainer() {
  const { handleSubmit, formState, register } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  return (
    <LogInPresenter
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
    />
  );
}
