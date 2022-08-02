import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

import DetailBodyUI from "./DetailBody.presenter";
import { CREATE_REVIEW, FETCH_REVIEWS } from "./DetailBody.queries";

interface IBody {
  name: string;
  remarks: string;
  tags: {
    tag: string;
  };
  contents: string;
}

export default function DetailBodyContainer(props: IBody) {
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [star, setStar] = useState(3);
  const [content, setContent] = useState("");
  // 리뷰등록
  const [createReview] = useMutation(CREATE_REVIEW);
  const {
    data: reviewData,
    fetchMore,
    loading,
  } = useQuery(FETCH_REVIEWS, {
    variables: {
      pageNum: 1,
      roomId: router.query.detailid,
    },
  });

  // 무한스크롤
  const loadFunc = () => {
    if (!reviewData) return;
    fetchMore({
      variables: {
        pageNum: Math.ceil(reviewData.fetchReviews.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchReviews)
          return {
            fetchReviews: [...prev.fetchReviews],
          };

        return {
          fetchReviews: [...prev.fetchReviews, ...fetchMoreResult.fetchReviews],
        };
      },
    });
  };

  const showModal = () => {
    // 모달 보여주기전 권한분기로 로그인이 되어있는지 확인해야함
    setIsModalVisible(true);
  };

  // 후기내용 onChange
  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  // 후기등록 Modal
  const handleOk = async () => {
    try {
      await createReview({
        variables: {
          createReviewInput: {
            roomId: router.query.detailid,
            content,
            star,
          },
        },
        refetchQueries: [
          {
            query: FETCH_REVIEWS,
            variables: {
              pageNum: 1,
              roomId: router.query.detailid,
            },
          },
        ],
      });
      setIsModalVisible(false);
      // location.reload();
    } catch (error) {
      Modal.error({
        title: "후기 등록에 실패했습니다",
        content: "로그인을 해주세요!",
      });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <DetailBodyUI
          isModalVisible={isModalVisible}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          setStar={setStar}
          data={props.data}
          reviewData={reviewData}
          onChangeComment={onChangeComment}
          loadFunc={loadFunc}
        />
      )}
    </>
  );
}
