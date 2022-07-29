import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import * as D from "./style";

const DragList = styled.div`
  width: 100%;
  padding: 10px 10px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;
const DragZone = styled.div`
  width: 100%;
  height: 500px;
  padding: 20px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
let DumDum = [
  {
    id: 1,
    name: "기본세팅",
    price: "3000",
    status: false,
  },
  {
    id: 2,
    name: "카놀라유",
    price: "3000",
    status: false,
  },
  {
    id: 3,
    name: "에어프라이",
    price: "3000",
    status: false,
  },
  {
    id: 4,
    name: "가스레인지",
    price: "3000",
    status: false,
  },
  {
    id: 5,
    name: "나이프",
    price: "3000",
    status: false,
  },
  {
    id: 6,
    name: "사용 후 애프터서비스",
    price: "3000",
    status: false,
  },
  {
    id: 7,
    name: "후라이팬",
    price: "3000",
    status: false,
  },
  {
    id: 8,
    name: "마체태",
    price: "3000",
    status: false,
  },
];

export default function DragPage(props) {
  let dragged: HTMLDivElement;

  // const [props.cart, setCart] = useState([]);

  const dragRef = useRef(null);

  const [inCart, setInCart] = useState(false);

  const DragItem = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("드레그아이템", e.target);
    e.dataTransfer.setData("data", e.currentTarget.innerHTML);
    dragged = e.target;
    // console.log("dragged", dragged);
  };

  const DragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const BeforeDropZone = (e: React.DragEvent<HTMLDivElement>) => {
    // console.log("드롭존", typeof e.dataTransfer.getData("data"));
    e.preventDefault();
    if ((e.target as HTMLDivElement).id === "BeforeDropzone") {
      (dragged.parentNode as HTMLDivElement).removeChild(dragged);
      (e.target as HTMLDivElement).appendChild(dragged);
      // console.log("ddd", e.target.appendChild(dragged).innerText);
      const newCart = props.cart.filter(
        (el) =>
          el !== (e.target as HTMLDivElement).appendChild(dragged).innerText
      );
      props.setCart(newCart);
    }
  };

  const AfterDropZone = (e: React.DragEvent<HTMLDivElement>) => {
    const newCart = [...props.cart];
    // console.log("드롭존", typeof e.dataTransfer.getData("data"));
    e.preventDefault();
    if (e.target.id === "AfterDropzone") {
      (dragged.parentNode as HTMLDivElement).removeChild(dragged);
      e.target.appendChild(dragged);
      newCart.push(e.target.appendChild(dragged).innerText);
      props.setCart(newCart);
      console.log(props.cart);
    }
  };

  let sum = 0;

  for (let i = 0; i < props.cart.length; i++) {
    sum += Number(props.cart[i].slice(-5, -1));
  }

  props.setSidePrice(sum);
  props.setOption(props.cart?.length);

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
            status={el.status}
          >
            {el.name}({el.price})
          </D.DraggableItem>
        ))}
      </DragList>
      <DragZone
        ref={dragRef}
        id="AfterDropzone"
        onDragOver={DragOver}
        onDrop={AfterDropZone}
      >
        {/* <D.Introduction>여기로 드롭해주세요</D.Introduction> */}
        {/* {props.cart.map(
          (el) => (
            <div>{el}</div>
          )
          console.log(el, typeof el)
        )} */}
      </DragZone>
    </D.Wrapper>
  );
}
