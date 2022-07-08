import React, { useState } from "react";
import * as Ae from "./AdminEdit.style";

export default function AdminEditPresenter() {
  const item = [
    { name: "구디점", room: ["number1", "number2", "number3"], _id: "1" },
    { name: "신림점", room: ["number1", "number2"], _id: "2" },
    { name: "신대방점", room: ["number1"], _id: "3" },
  ];

  const [editId, setEditId] = useState("");

  const onClickOpenEdit = (event: React.MouseEvent<HTMLDivElement>) => {
    setEditId(event.target.id);
    console.log(editId);
  };
  return (
    <Ae.Wrapper>
      {item.map((el) => (
        <Ae.Header>
          <Ae.HeaderItem id={el._id} onClick={onClickOpenEdit}>
            {el.name}
          </Ae.HeaderItem>
        </Ae.Header>
      ))}
      <Ae.TableWrapper></Ae.TableWrapper>
    </Ae.Wrapper>
  );
}
