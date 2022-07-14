import * as DN from "./DetailNavigation.styles";

interface IDetailNavUI {
  onClickRoomMove: (e: any) => void;
  router: any;
  data: any;
  Rooms: any;
}

export default function DetailNavUI(props: IDetailNavUI) {
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
