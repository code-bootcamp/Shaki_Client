import styled from "@emotion/styled";
import React, { useState } from "react";
import * as D from "./style";

const DragList = styled.div`
  width: 400px;
  padding: 10px 10px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;
const DragZone = styled.div`
  height: 500px;
  width: 400px;
  padding: 20px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
let DumDum = [
  {
    id: 1,
    name: "기본세팅",
    price: "3000",
  },
  {
    id: 2,
    name: "카놀라유",
    price: "3000",
  },
  {
    id: 3,
    name: "에어프라이",
    price: "3000",
  },
  {
    id: 4,
    name: "가스레인지",
    price: "3000",
  },
  {
    id: 1,
    name: "기본세팅",
    price: "3000",
  },
  {
    id: 2,
    name: "카놀라유",
    price: "3000",
  },
  {
    id: 3,
    name: "에어프라이",
    price: "3000",
  },
  {
    id: 4,
    name: "가스레인지",
    price: "3000",
  },
];

export default function DragPage(props) {
  let dragged: HTMLDivElement;

  const [keyword, setKeyword] = useState("");

  const onChangekeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const DragItem = (e: any) => {
    console.log("드레그아이템", e.target);
    e.dataTransfer.setData("data", e.currentTarget.innerHTML);
    dragged = e.target;
    console.log("dragged", dragged);
  };

  const DragOver = (e: any) => {
    e.preventDefault();
  };

  const DropZone = (e: any) => {
    console.log("드롭존", typeof e.dataTransfer.getData("data"));
    e.preventDefault();
    if (e.target.id === "dropzone") {
      (dragged.parentNode as HTMLDivElement).removeChild(dragged);
      e.target.appendChild(dragged);
      const price = Number(
        e.dataTransfer
          .getData("data")
          .split("")
          .filter((el) => !isNaN(el))
          .join("")
      );

      props.setSidePrice((prev) => (prev += price));
    }
  };

  return (
    <D.Wrapper>
      <D.Head>추가옵션</D.Head>
      {/* <D.searchBar
        placeholder="키워드를 입력해주세요."
        onChange={onChangekeyWord}
      /> */}
      <DragList id="dropzone" onDrop={DropZone} onDragOver={DragOver}>
        {DumDum.filter((el) => el.name.includes(keyword))?.map((el, i) => (
          <D.DraggableItem
            id="draggable"
            draggable={true}
            onDragStart={DragItem}
            key={el.id}
            index={i + 1}
          >
            {el.name}({el.price})
          </D.DraggableItem>
        ))}
      </DragList>
      <DragZone id="dropzone" onDragOver={DragOver} onDrop={DropZone}>
        <D.Introduction>여기로 드롭해주세요</D.Introduction>
      </DragZone>
    </D.Wrapper>
  );
}
