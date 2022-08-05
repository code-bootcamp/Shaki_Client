import React, { Fragment, MouseEvent } from "react";
import AdminWrite from "../adminwrite/AdminWrite.container";
import * as Ae from "./AdminEdit.style";
import { v4 as uuidv4 } from "uuid";

type fetchRoom = {
  __typename: string;
  address: string;
  branch: {
    __typename: string;
    branch: string;
  };
  conaddressDetail: string;
  contents: string;
  id: string;
  images: {
    __typename: string;
    url: string;
  }[];
  maxPeople: string;
  name: string;
  price: number;
  remarks: string;
  tag: {
    __typename: string;
    tag: string;
  }[];
  zipcode: string;
};

type fetchRooms = {
  branch: {
    __typename: string;
    branch: string;
  };
  id: string;
  name: string;
  __typename: string;
}[];

interface IAdminEditPresenter {
  isEdit?: boolean;
  roomsdata?: { fetchRooms: fetchRooms };
  roomdata?: fetchRoom;
  onClickOpenEdit: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function AdminEditPresenter(props: IAdminEditPresenter) {
  console.log("111", props.roomsdata);
  return (
    <Ae.Wrapper>
      <Ae.TebWrapper>
        <Ae.HeadWrapper>
          {props.roomsdata?.fetchRooms?.map((el: any) => (
            <Ae.Header key={uuidv4()}>
              <Ae.HeaderItem id={el.id} onClick={props.onClickOpenEdit}>
                {el.branch.branch}
                <Ae.RoomWrapper className="dropdownItem">
                  <Fragment>
                    <Ae.RoomItem>{el.name}</Ae.RoomItem>
                  </Fragment>
                </Ae.RoomWrapper>
              </Ae.HeaderItem>
            </Ae.Header>
          ))}
        </Ae.HeadWrapper>
      </Ae.TebWrapper>
      <AdminWrite roomdata={props.roomdata} isEdit={props.isEdit} />
    </Ae.Wrapper>
  );
}
