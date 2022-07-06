import * as M from "./MainStyle";

export default function MainPresenter() {
  return (
    <M.HTML>
      <M.Wrapper>
        <M.ImageWrapper1>
          <M.ImageHeader>
            신대방역
            <M.ImageHeaderIcon />
          </M.ImageHeader>
          <M.MainImg src="/MainImage/MainImage_1.svg" />
          <M.ImageUnderBar>
            언더바
            <M.UnderBarIcon src="/icon/Star.svg" />
          </M.ImageUnderBar>
        </M.ImageWrapper1>
        <M.ImageWrapper2>
          <M.ImageHeader>
            신림역
            <M.ImageHeaderIcon />
          </M.ImageHeader>
          <M.MainImg src="/MainImage/MainImage_2.svg" />
          <M.ImageUnderBar>
            언더바
            <M.UnderBarIcon src="/icon/Star.svg" />
          </M.ImageUnderBar>
        </M.ImageWrapper2>
        <M.ImageWrapper3>
          <M.ImageHeader>
            구로디지털단지역
            <M.ImageHeaderIcon />
          </M.ImageHeader>
          <M.MainImg src="/MainImage/MainImage_3.svg" />
          <M.ImageUnderBar>
            언더바
            <M.UnderBarIcon src="/icon/Star.svg" />
          </M.ImageUnderBar>
        </M.ImageWrapper3>
      </M.Wrapper>
    </M.HTML>
  );
}
