import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";

const DragList = styled.div`
  height: 200px;
  width: 100px;
  border: 1px solid blue;
`;
const DragZone = styled.div`
  height: 400px;
  width: 500px;
  border: 1px solid lightcoral;
`;
let DumDum = [
  {
    id: 1,
    price: 3000,
    name: "기본세팅",
  },
  {
    id: 2,
    price: 3000,
    name: "카놀라유",
  },
  {
    id: 3,
    price: 3000,
    name: "에어프라이",
  },
  {
    id: 4,
    price: 3000,
    name: "가스레인지",
  },
];

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  let dragged: HTMLDivElement;

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
    console.log("드롭존", e.dataTransfer.getData("data"));
    e.preventDefault();
    if (e.target.id === "dropzone") {
      (dragged.parentNode as HTMLDivElement).removeChild(dragged);
      e.target.appendChild(dragged);
      console.log("?", dragged.parentNode);
    }
  };

  const [modal, setModal] = useState(false);

  const onClickModal = () => {
    setModal(true);
    console.log(modal);
  };

  return (
    <Modal>
      <Box>
        <DragList
          id="dropzone"
          onDrop={DropZone}
          onDragOver={DragOver}
          style={{
            height: "400px",
            padding: "30px 10px",
            borderRadius: "20px",
          }}
        >
          {DumDum.map((el, i) => (
            <div
              id="draggable"
              draggable={true}
              onDragStart={DragItem}
              key={el.id}
              index={i + 1}
            >
              {el.name}
            </div>
          ))}
          {/* </div> */}
        </DragList>
        <DragZone
          id="dropzone"
          onDragOver={DragOver}
          onDrop={DropZone}
          style={{
            height: "400px",
            padding: "30px 10px",
            borderRadius: "20px",
          }}
        ></DragZone>
      </Box>
    </Modal>
  );
}
