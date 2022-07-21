import React, { Fragment, useState } from "react";
import AdminWrite from "../adminwrite/AdminWrite.container";
import * as Ae from "./AdminEdit.style";
import { v4 as uuidv4 } from "uuid";

interface IAdminEditPresenter {
  isEdit?: boolean;
  roomsdata?: any;
  roomdata?: any;
  onClickOpenEdit: (event) => void;
}

export default function AdminEditPresenter(props: IAdminEditPresenter) {
  return (
    <Ae.Wrapper>
      <Ae.TebWrapper>
        <Ae.HeadWrapper>
          {props.roomsdata?.fetchRooms?.map((el) => (
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
