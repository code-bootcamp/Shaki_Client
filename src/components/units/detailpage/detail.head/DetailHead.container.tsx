import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import DetailHeaderUI from "./DetailHead.presenter";
import { TOGGLE_PICK } from "./DetailHead.queries";

interface IRoom {
  data: {
    star: Number;
    images: {
      url: string;
    };
  };
}

export default function DetailHeadContainer(props: IRoom) {
  // 찜하기
  const router = useRouter();
  const [togglePick] = useMutation(TOGGLE_PICK);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const onClickPick = async () => {
    if (!accessToken) {
      alert("로그인 후 이용해주세요.");
    } else {
      try {
        const result = await togglePick({
          variables: {
            roomId: router.query.detailid,
          },
        });
        {
          result.data.togglePick === true
            ? alert("찜 목록에 추가되었습니다.")
            : alert("찜 목록에서 삭제 되었습니다.");
        }
      } catch (error) {
        Modal.error({ content: "찜하기에 실패하셨습니다." });
      }
    }
  };

  return <DetailHeaderUI onClickPick={onClickPick} data={props.data} />;
}
