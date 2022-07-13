import React, { Fragment, useState } from "react";
import AdminWrite from "../adminwrite/AdminWrite.container";
import * as Ae from "./AdminEdit.style";
import { v4 as uuidv4 } from "uuid";

interface IAdminEditPresenter {
  isEdit?: boolean;
  roomdata?: any;
}

export default function AdminEditPresenter(props: IAdminEditPresenter) {
  const item = [
    { name: "구디점", room: ["number1", "number2", "number3"], _id: "1" },
    { name: "신림점", room: ["number1", "number2"], _id: "2" },
    { name: "신대방점", room: ["number1"], _id: "3" },
  ];

  const [editId, setEditId] = useState("");

  const onClickOpenEdit = (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log(event.target.id);
    setEditId(event.currentTarget.id);
  };
  return (
    <Ae.Wrapper>
      <Ae.TebWrapper>
        <Ae.HeadWrapper>
          {item.map((el) => (
            <Ae.Header key={uuidv4()}>
              <Ae.HeaderItem id={el._id} onClick={onClickOpenEdit}>
                {el.name}
              </Ae.HeaderItem>

              <Ae.RoomWrapper className="dropdownItem">
                {el.room.map((el) => (
                  <Fragment key={uuidv4()}>
                    <Ae.RoomItem>{el}</Ae.RoomItem>
                  </Fragment>
                ))}
              </Ae.RoomWrapper>
            </Ae.Header>
          ))}
        </Ae.HeadWrapper>
      </Ae.TebWrapper>
      <AdminWrite roomdata={props.roomdata} isEdit={props.isEdit} />
    </Ae.Wrapper>
  );
}
