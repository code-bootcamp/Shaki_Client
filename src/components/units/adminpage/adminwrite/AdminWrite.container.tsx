import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdminWriteUI from "./AdminWrite.persenter";
import { CREATE_ROOM, UPDATE_ROOM } from "./AdminWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useAdminAuth } from "../../../../hooks/useAdminAuth";

interface IAdminWrite {
  isEdit?: boolean;
  roomdata?: any;
}

type data = {
  branch: string;
  name: string;
  price: number;
  remarks: string;
  contents: string;
  maxPeople: number;
  conaddressDetail: string;
};

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

function AdminWrite(props: IAdminWrite) {
  const router = useRouter();

  const [isModalView, setIsModalView] = useState(false);
  const [imgMainUrls, setImgMainUrls] = useState(["", "", "", "", ""]);
  const [tags, setTags] = useState<any>([]);

  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createRoom] = useMutation(CREATE_ROOM);
  const [updateRoom] = useMutation(UPDATE_ROOM);

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

  const onClickRemoveFile = () => {
    setImgMainUrls(["", "", "", "", ""]);
  };

  const onClickSubmit = async (data: data) => {
    try {
      await createRoom({
        variables: {
          createRoomInput: {
            ...data,
            zipcode,
            address,
            images: imgMainUrls,
            tags,
          },
        },
      });
      Modal.success({ content: "게시글이 등록되었습니다." });
      router.push(`/adminpage/adminlist`);
    } catch (error) {
      Modal.error({ content: "게시글 등록 실패하였습니다." });
    }
  };

  useEffect(() => {
    setAddress(props.roomdata?.fetchRoom.address || ""),
      setZipcode(props.roomdata?.fetchRoom.zipcode || "");

    if (props.roomdata?.fetchRoom.images.length) {
      const image = props.roomdata?.fetchRoom.images.map((el: any) => el.url);
      setImgMainUrls([...image]);
    }

    if (props.roomdata?.fetchRoom.tags.length) {
      const tags = props.roomdata?.fetchRoom.tags.map((el: any) => el.tag);
      setTags([...tags]);
    }
  }, [props.roomdata]);

  console.log("이미지", imgMainUrls);

  const onClickEdit = async (data: data) => {
    try {
      const currentFiles = JSON.stringify(imgMainUrls);
      const defaultFiles = JSON.stringify(props.roomdata.fetchRoom.images);
      const isChangedFiles = currentFiles !== defaultFiles;

      const updateUseditemInput: any = {};
      if (isChangedFiles) updateUseditemInput.images = imgMainUrls;

      await updateRoom({
        variables: {
          roomId: router.query.id,
          updateRoomInput: {
            ...data,
            zipcode,
            address,
            images: imgMainUrls,
            tags,
          },
        },
      });
      alert("가맹점 수정 완료");
      router.push(`/adminpage/adminlist`);
    } catch (error) {
      alert("가맹점 수정 실패");
    }
  };

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
      onClickRemoveFile={onClickRemoveFile}
      // 태그
      tags={tags}
      setTags={setTags}
      // 수정
      isEdit={props.isEdit}
      roomdata={props.roomdata}
      onClickEdit={onClickEdit}
    />
  );
}

export default useAdminAuth(AdminWrite);
