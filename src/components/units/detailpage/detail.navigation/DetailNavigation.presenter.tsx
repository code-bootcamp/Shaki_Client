import * as DN from "./DetailNavigation.styles";

export default function DetailNavUI(props) {
  return (
    <DN.Wrapper>
      <DN.MenuWrapper>
        {props.Rooms[0]?.map((el: any, i: number) => (
          <DN.MenuName
            onClick={props.onClickRoomMove}
            isPosition={props.router.asPath.split("/")[1]}
            id={el}
            key={i}
          >
            쉐이키{i + 1}
          </DN.MenuName>
        ))}
      </DN.MenuWrapper>
    </DN.Wrapper>
  );
}
