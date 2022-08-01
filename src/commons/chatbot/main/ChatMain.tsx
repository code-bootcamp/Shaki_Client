import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { voiceOnState } from "../../store";
const WrapperRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  /* background-image: url("/landing/locationlogo.png"); */
  /* background-image: url("https://storage.googleapis.com/front_image/locationlogo.png"); */
  background-image: url("https://storage.googleapis.com/front_image/locationLogo.png");

  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 130px;
  margin-left: 30px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-family: sans-serif;
`;

const Contents = styled.span`
  font-size: 15px;
  font-weight: 10;
  font-family: sans-serif;
  color: gray;
`;

const Infotxt = styled.span`
  font-size: 12px;
  font-weight: 10;
  font-family: sans-serif;
  color: darkgray;
`;

export default function ChatMain() {
  const [voiceOn, setVoiceOn] = useRecoilState(voiceOnState);

  const onClickReset = () => {
    window.location.reload();
    // setVoiceOn(true);
  };

  return (
    <WrapperRoot>
      <Wrapper></Wrapper>
      <Title>쉐이키 문의하기 봇</Title>
      <Infotxt>
        쉐이키봇은 음성과함께 안내됩니다 <br></br> 볼륨을 조절해주세요!
      </Infotxt>
      <button
        style={{ border: "none", backgroundColor: "beige" }}
        onClick={onClickReset}
      >
        문제가있나요? 클릭!
      </button>
      <Contents>
        신개념 공유주방 플랫폼 쉐이키!<br></br>
        주중 10:00 ~ 19:00 까지 운영{" "}
      </Contents>
    </WrapperRoot>
  );
}
