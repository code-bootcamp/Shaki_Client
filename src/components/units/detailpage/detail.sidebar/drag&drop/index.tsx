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
    id: 5,
    name: "나이프",
    price: "3000",
  },
  {
    id: 6,
    name: "사용 후 애프터서비스",
    price: "3000",
  },
  {
    id: 7,
    name: "후라이팬",
    price: "3000",
  },
  {
    id: 8,
    name: "마체태",
    price: "3000",
  },
];

export default function DragPage(props) {
  let dragged: HTMLDivElement;

  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const DragItem = (e: any) => {
    console.log("드레그아이템", e.target);
    e.dataTransfer.setData("data", e.currentTarget.innerHTML);
    dragged = e.target;
    console.log("dragged", dragged);
  };

  const DragOver = (e: any) => {
    e.preventDefault();
  };

  const BeforeDropZone = (e: any) => {
    console.log("드롭존", typeof e.dataTransfer.getData("data"));
    e.preventDefault();
    if (e.target.id === "BeforeDropzone") {
      (dragged.parentNode as HTMLDivElement).removeChild(dragged);
      e.target.appendChild(dragged);
      console.log("ddd", e.target.appendChild(dragged).innerText);
      const newCart = cart.filter(
        (el) => el !== e.target.appendChild(dragged).innerText
      );
      setCart(newCart);
    }
  };

  const AfterDropZone = (e: any) => {
    const newCart = [...cart];
    console.log("드롭존", typeof e.dataTransfer.getData("data"));
    e.preventDefault();
    if (e.target.id === "AfterDropzone") {
      (dragged.parentNode as HTMLDivElement).removeChild(dragged);
      e.target.appendChild(dragged);
      newCart.push(e.target.appendChild(dragged).innerText);
      setCart(newCart);
      console.log(newCart, "newCart");
    }
  };

  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum += Number(cart[i].slice(-5, -1));
  }

  props.setSidePrice(sum);
  props.setOption(cart?.length);

  return (
    <D.Wrapper>
      <D.Head>추가옵션</D.Head>
      {/* <D.searchBar
        placeholder="키워드를 입력해주세요."
        onChange={onChangekeyWord}
      /> */}
      <DragList
        id="BeforeDropzone"
        onDrop={BeforeDropZone}
        onDragOver={DragOver}
      >
        {DumDum.map((el, i) => (
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
      <DragZone id="AfterDropzone" onDragOver={DragOver} onDrop={AfterDropZone}>
        <D.Introduction>여기로 드롭해주세요</D.Introduction>
      </DragZone>
    </D.Wrapper>
  );
}
