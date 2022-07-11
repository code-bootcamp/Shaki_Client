import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AdminWriteUI from "./AdminWrite.persenter";
import { CREATE_ROOM } from "./AdminWrite.queries";

export default function AdminWrite() {
  const [isModalView, setIsModalView] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

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
  // Daumpost 연결 및 카카오맵 연동
  const onToggleModal = () => {
    setIsModalView((prev) => !prev);
  };
  const handelCompleteDaum = (addressData) => {
    onToggleModal();
    setAddress(addressData.address);
    setZipcode(addressData.zonecode);
  };
  return (
    <AdminWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      // 주소검색 daumpost연결
      handelCompleteDaum={handelCompleteDaum}
      isModalView={isModalView}
      onToggleModal={onToggleModal}
      address={address}
      zipcode={zipcode}
    />
  );
}
