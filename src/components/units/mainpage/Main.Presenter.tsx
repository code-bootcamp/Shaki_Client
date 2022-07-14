import * as Ma from "./Main.Style";
import { v1 } from "uuid";
import { Rate } from "antd";

export default function MainPresenter(props: any) {
  return (
    <Ma.HTML>
      <Ma.Wrapper>
        {/* <Ma.ImageWrapper1>
          <Ma.ImageHeader>
            {props.data?.fetchBranches[0].branch.branch}
            <Ma.ImageHeaderIcon />
          </Ma.ImageHeader>
          <Ma.MainImg src="/MainImage/MainImage_1.svg" />
          <Ma.ImageUnderBar>
            {props.data?.fetchBranches[0].remarks}
            <Ma.UnderBarIcon src="/icon/Star.svg" />
          </Ma.ImageUnderBar>
        </Ma.ImageWrapper1> */}
        <Ma.ImageWrapper2>
          {props.data?.fetchBranches.map((el: any) => (
            <>
              <Ma.ImageHeader key={v1()}>
                {el.branch.branch}
                <Ma.ImageHeaderIcon />
              </Ma.ImageHeader>
              {/* 이미지 */}
              <Ma.MainContents onClick={props.onClickRoom} id={el.id}>
                <Ma.MainImg src={`${el.images[0].url}`} />
                <Ma.ImageUnderBar>
                  {el.remarks}
                  {/* rating */}
                  <Rate value={el.starAmount} />
                </Ma.ImageUnderBar>
              </Ma.MainContents>
            </>
          ))}
        </Ma.ImageWrapper2>
        {/* <Ma.ImageWrapper3>
          <Ma.ImageHeader>
            구로디지털단지역
            <Ma.ImageHeaderIcon />
          </Ma.ImageHeader>
          <Ma.MainImg src="/MainImage/MainImage_3.svg" />
          <Ma.ImageUnderBar>
            언더바
            <Ma.UnderBarIcon src="/icon/Star.svg" />
          </Ma.ImageUnderBar>
        </Ma.ImageWrapper3> */}
      </Ma.Wrapper>
    </Ma.HTML>
  );
}
