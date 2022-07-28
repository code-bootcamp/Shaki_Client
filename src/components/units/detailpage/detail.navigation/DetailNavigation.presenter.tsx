import { useContext } from "react";
import { ThemeContext } from "../../../../../pages/_app";
import * as DN from "./DetailNavigation.styles";

interface IDetailNavUI {
  onClickRoomMove: (e: any) => void;
  router: any;
  data: any;
}

function RoomArray(data: any, asPath: any) {
  let result: any[] = [];
  for (let i = 0; i < data.length; i++) {
    const answer = data[i].branch.idAll.split(",");
    for (let j = 0; j < answer.length; j++) {
      if (asPath.slice(0, asPath.length).includes("?")) {
        if (asPath.slice(0, asPath.length - 1) == answer[j]) {
          result.push(answer);
          return result;
        }
      } else {
        if (asPath.slice(0, asPath.length) == answer[j]) {
          result.push(answer);
          return result;
        }
      }
    }
  }
  console.log("RoomArray함수실패!");
}

export default function DetailNavUI(props: IDetailNavUI) {
  const { theme } = useContext(ThemeContext);

  let Rooms: any[string];
  Rooms = RoomArray(props.data.fetchBranches, props.router?.query.detailid);

  return (
    <DN.Wrapper theme={theme}>
      <DN.MenuWrapper>
        {Rooms[0].map((el: any, i: number) => (
          <DN.MenuName
            onClick={props.onClickRoomMove}
            isPosition={props.router.asPath.split("/")[2].replace("?", "")}
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
