import { useState } from "react";
import DetailBodyUI from "./DetailBody.presenter";

export default function DetailBodyContainer() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [star, setStar] = useState(3);
  const showModal = () => {
    // 모달 보여주기전 권한분기로 로그인이 되어있는지 확인하기.
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 별점

  return (
    <>
      <DetailBodyUI
        isModalVisible={isModalVisible}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        setStar={setStar}
      />
    </>
  );
}
