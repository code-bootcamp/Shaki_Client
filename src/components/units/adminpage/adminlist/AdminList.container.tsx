import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import AdminListUI from "./AdminList.presenter";
import { DELETE_ROOM, FETCH_ROOMS } from "./AdminList.queries";

export default function AdminList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_ROOMS);
  const [deleteRoom] = useMutation(DELETE_ROOM);

  const onClickMoveEdit = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/adminpage/${event.currentTarget.id}/adminedit`);
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    if (confirm("정말 삭제하시겠습니까? 삭제하면 되돌릴 수 없습니다!")) {
      try {
        await deleteRoom({
          variables: {
            roomId: event.currentTarget.id,
          },
        });
        alert("삭제 성공하였습니다.");
        router.push("/adminpage/adminlist");
      } catch (error) {
        alert("삭제 실패하였습니다.");
      }
    } else {
      router.push(`/adminpage/adminlist`);
    }
  };

  return (
    <AdminListUI
      data={data}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
    />
  );
}
