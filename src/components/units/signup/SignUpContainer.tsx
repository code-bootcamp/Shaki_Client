import { useForm } from "react-hook-form";
import SignUpPresenter from "./SignUpPresenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  phoneNumber: yup.number().required(),
  authentication: yup.number().required(),
});

export default function SignUpContainer() {
  const { handleSubmit, formState, register } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  return (
    <SignUpPresenter
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
    />
  );
}
