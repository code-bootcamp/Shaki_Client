import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import DetailBodyUI from "./DetailBody.presenter";
import { CREATE_REVIEW, FETCH_ROOM } from "./DetailBody.queries";

interface IBody {
  name: string;
  remarks: string;
  tags: {
    tag: string;
  };
  contents: string;
}

export default function DetailBodyContainer(props: IBody) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // 리뷰등록
  const [createReview] = useMutation(CREATE_REVIEW);
  const router = useRouter();

  const [star, setStar] = useState(3);
  const [content, setContent] = useState("");

  const showModal = () => {
    // 모달 보여주기전 권한분기로 로그인이 되어있는지 확인해야함
    setIsModalVisible(true);
  };

  // 후기내용 onChange
  const onChangeComment = (e: any) => {
    setContent(e.target.value);
  };
  // 후기등록 Modal
  const handleOk = async () => {
    try {
      await createReview({
        variables: {
          createReview: {
            roomId: router.query.detailid,
            content,
            star,
          },
        },
        refetchQueries: [
          {
            query: FETCH_ROOM,
            variables: {
              id: router.query.detailid,
            },
          },
        ],
      });
      setIsModalVisible(false);
    } catch (error) {
      console.log(content, star);
      alert(error);
    }
    // setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <DetailBodyUI
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setStar={setStar}
        data={props.data}
        onChangeComment={onChangeComment}
      />
    </>
  );
}
