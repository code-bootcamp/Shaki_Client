import styled from "@emotion/styled";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import * as D from "./style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfiniteScroll from "react-infinite-scroller";

export default function DragPage(props) {
  let dragged: HTMLDivElement;

  const dragRef = useRef(null);

  const DragItem = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("드레그아이템", e.target);
    e.dataTransfer.setData("data", e.currentTarget.innerHTML);
    dragged = e.target as HTMLDivElement;
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
        (el: string) =>
          el !== (e.target as HTMLDivElement).appendChild(dragged).innerText
      );
      props.setCart(newCart);
    }
  };

  const AfterDropZone = (e: React.DragEvent<HTMLDivElement>) => {
    const newCart = [...props.cart];
    // console.log("드롭존", typeof e.dataTransfer.getData("data"));
    e.preventDefault();
    if ((e.target as HTMLDivElement).id === "AfterDropzone") {
      (dragged.parentNode as HTMLDivElement).removeChild(dragged);
      (e.target as HTMLDivElement).appendChild(dragged);
      newCart.push((e.target as HTMLDivElement).appendChild(dragged).innerText);
      props.setCart(newCart);
      dragRef.current.innerText = "";
    }
  };

  const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    // if((event.target as HTMLButtonElement).id == )
  };

  let sum = 0;

  for (let i = 0; i < props.cart.length; i++) {
    sum += Number(props.cart[i].split("$")[1]);
  }

  props.setSidePrice(sum);
  props.setOption(props.cart?.length);
  console.log(props.DumDum);

  return (
    <D.Wrapper>
      <D.Head>추가옵션</D.Head>
      {/* <D.searchBar
        placeholder="키워드를 입력해주세요."
        onChange={onChangekeyWord}
      /> */}
      <D.DragBox>
        <D.DragList
          id="BeforeDropzone"
          onDrop={BeforeDropZone}
          onDragOver={DragOver}
        >
          {props.DumDum.map((el) => (
            <D.DraggableItem
              id="draggable"
              draggable={true}
              onDragStart={DragItem}
              key={el.id}
            >
              {el.name} ${el.price}
            </D.DraggableItem>
          ))}
        </D.DragList>

        <D.DragZone
          id="AfterDropzone"
          onDragOver={DragOver}
          onDrop={AfterDropZone}
          ref={dragRef}
        ></D.DragZone>
        <ShoppingCartIcon
          style={{ position: "absolute", top: "30%", right: "15%" }}
        />
      </D.DragBox>
      {props.DumDum.filter((el) =>
        props.cart.includes(el.name + " " + "$" + el.price)
      ).map((el) => (
        <D.optionList>
          <D.optionItem>{el.name}</D.optionItem>
          <D.optionItem>{el.price}</D.optionItem>
          <D.optionItem>
            {el.countable === true ? <input /> : <div>1</div>}
          </D.optionItem>
          <button>취소</button>
        </D.optionList>
      ))}
      {/* {props.cart.map((el) => (
        <>
          <div>{el}</div>
        </>
      ))} */}
      <D.CancelButton onClick={props.onClickCartOpen}>닫기</D.CancelButton>
    </D.Wrapper>
  );
}
