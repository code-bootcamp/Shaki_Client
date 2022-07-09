import React, { useState } from "react";
import AdminWrite from "../adminwrite/AdminWrite.container";
import * as Ae from "./AdminEdit.style";

export default function AdminEditPresenter() {
  const item = [
    { name: "구디점", room: ["number1", "number2", "number3"], _id: "1" },
    { name: "신림점", room: ["number1", "number2"], _id: "2" },
    { name: "신대방점", room: ["number1"], _id: "3" },
  ];

  const [editId, setEditId] = useState("");

  const onClickOpenEdit = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target.id);
    setEditId(event.currentTarget.id);
  };
  return (
    <Ae.Wrapper>
      <Ae.TebWrapper>
        <Ae.HeadWrapper>
          {item.map((el) => (
            <Ae.Header>
              <Ae.HeaderItem id={el._id} onClick={onClickOpenEdit}>
                {el.name}
              </Ae.HeaderItem>

              <Ae.RoomWrapper className="dropdownItem">
                {el.room.map((el) => (
                  <Ae.RoomItem>{el}</Ae.RoomItem>
                ))}
              </Ae.RoomWrapper>
            </Ae.Header>
          ))}
        </Ae.HeadWrapper>
      </Ae.TebWrapper>
      <AdminWrite />
    </Ae.Wrapper>
  );
}
