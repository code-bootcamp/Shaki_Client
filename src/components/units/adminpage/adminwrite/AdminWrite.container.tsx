import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdminWriteUI from "./AdminWrite.persenter";
import { CREATE_ROOM } from "./AdminWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";

interface IAdminWrite {
  isEdit?: boolean;
  roomdata?: any;
}

const schema = yup.object({
  branch: yup.string().required("필수입력사항 입니다."),
  name: yup.string().required("필수입력사항 입니다."),
  remarks: yup.string().required("필수입력사항 입니다."),
  price: yup
    .number()
    .typeError("숫자만 입력해주세요.")
    .required("필수입력사항 입니다."),
  maxPeople: yup
    .number()
    .typeError("숫자만 입력해주세요!")
    .min(1, "1명 이상으로 해주세요!")
    .max(8, "8명 이상은 전화로 문의 해주세요")
    .required("필수입력사항 입니다."),
  contents: yup.string().required("필수입력사항 입니다."),
});

export default function AdminWrite(props: IAdminWrite) {
  const router = useRouter();

  const [isModalView, setIsModalView] = useState(false);
  const [imgMainUrls, setImgMainUrls] = useState(["", "", "", "", ""]);
  const [tags, setTags] = useState([]);

  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createRoom] = useMutation(CREATE_ROOM);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeImgMainUrls = (fileUrl: string, index: number) => {
    const newImgUrls = [...imgMainUrls];
    newImgUrls[index] = fileUrl;
    setImgMainUrls(newImgUrls);
  };

  // Daumpost 연결 및 카카오맵 연동
  const onToggleModal = () => {
    setIsModalView((prev) => !prev);
  };
  const handelCompleteDaum = (addressData: any) => {
    onToggleModal();
    setZipcode(addressData.zonecode);
    setAddress(addressData.address);
  };

  const onClickSubmit = async (data: any) => {
    try {
      await createRoom({
        variables: {
          createRoom: {
            ...data,
            zipcode,
            address,
            images: imgMainUrls,
            tags,
          },
        },
      });
      Modal.success({ content: "게시글이 등록되었습니다." });
      router.push(`/adminpage/adminhome`);
    } catch (error) {
      Modal.error({ content: "게시글 등록 실패하였습니다." });
    }
  };

  useEffect(() => {
    setAddress(props.roomdata?.fetchRoom.address || ""),
      setZipcode(props.roomdata?.fetchRoom.zipcode || "");

    if (props.roomdata?.fetchRoom.images.length) {
      setImgMainUrls([...props.roomdata?.fetchRoom.images]);
    }
    if (props.roomdata?.fetchRoom.tags.length) {
      setTags([...props.roomdata?.fetchRoom.tags]);
    }
  }, [props.roomdata]);
  console.log(props.roomdata);

  return (
    <AdminWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      // 주소검색 daumpost연결
      handelCompleteDaum={handelCompleteDaum}
      isModalView={isModalView}
      onToggleModal={onToggleModal}
      address={address}
      zipcode={zipcode}
      // 이미지 업로드
      onChangeImgMainUrls={onChangeImgMainUrls}
      imgMainUrls={imgMainUrls}
      // 태그
      tags={tags}
      setTags={setTags}
      // 수정
      isEdit={props.isEdit}
      roomdata={props.roomdata}
    />
  );
}
