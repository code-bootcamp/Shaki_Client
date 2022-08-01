import * as Ma from "./Main.Style";
import { v1 } from "uuid";
import { Rate } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../../../../pages/_app";

type branch = {
  __typename: string;
  branch: string;
  id: string;
};

type images = {
  __typename: string;
  url: string;
};

type fetchBranches = {
  branch: branch;
  id: string;
  images: images[];
  name: string;
  remarks: string;
  star: number;
};

interface IMainProps {
  data: { fetchBranches: fetchBranches[] };
  onClickRoom: (el: any) => (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function MainPresenter(props: IMainProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <Ma.HTML theme={theme}>
      <Ma.Wrapper>
        <Ma.ImageWrapper2>
          {props.data?.fetchBranches.map((el: any) => (
            <Ma.MainContextWrapper key={v1()}>
              <Ma.ImageHeader>
                {el.branch.branch}
                <Ma.ImageHeaderIcon />
              </Ma.ImageHeader>
              {/* 이미지 */}
              <Ma.MainContents onClick={props.onClickRoom(el)} id={el.id}>
                <Ma.MainImg src={`${el.images[0].url}`} />
                <Ma.ImageUnderBar>
                  {el.remarks}
                  {/* rating */}
                  <Rate value={el.star} disabled />
                </Ma.ImageUnderBar>
              </Ma.MainContents>
            </Ma.MainContextWrapper>
          ))}
        </Ma.ImageWrapper2>
      </Ma.Wrapper>
    </Ma.HTML>
  );
}
