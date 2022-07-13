import * as Ma from "./Main.Style";

export default function MainPresenter(props: any) {
  return (
    <Ma.HTML>
      <Ma.Wrapper>
        <Ma.ImageWrapper1>
          <Ma.ImageHeader>
            {/* {props.data?.fetchBranches[0].name} */}네임
            <Ma.ImageHeaderIcon />
          </Ma.ImageHeader>
          <Ma.MainImg src="/MainImage/MainImage_1.svg" />
          <Ma.ImageUnderBar>
            {/* {props.data?.fetchBranches[0].remarks} */}리마크
            <Ma.UnderBarIcon src="/icon/Star.svg" />
          </Ma.ImageUnderBar>
        </Ma.ImageWrapper1>
        <Ma.ImageWrapper2>
          <Ma.ImageHeader>
            신림역
            <Ma.ImageHeaderIcon />
          </Ma.ImageHeader>
          <Ma.MainImg src="/MainImage/MainImage_2.svg" />
          <Ma.ImageUnderBar>
            언더바
            <Ma.UnderBarIcon src="/icon/Star.svg" />
          </Ma.ImageUnderBar>
        </Ma.ImageWrapper2>
        <Ma.ImageWrapper3>
          <Ma.ImageHeader>
            구로디지털단지역
            <Ma.ImageHeaderIcon />
          </Ma.ImageHeader>
          <Ma.MainImg src="/MainImage/MainImage_3.svg" />
          <Ma.ImageUnderBar>
            언더바
            <Ma.UnderBarIcon src="/icon/Star.svg" />
          </Ma.ImageUnderBar>
        </Ma.ImageWrapper3>
      </Ma.Wrapper>
    </Ma.HTML>
  );
}
