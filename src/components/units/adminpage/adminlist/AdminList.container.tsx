import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import AdminListUI from "./AdminList.presenter";
import { FETCH_ROOMS } from "./AdminList.queries";

export default function AdminList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_ROOMS);

  const onClickMoveEdit = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/adminpage/${event.currentTarget.id}/adminedit`);
  };

  const onClickDelete = () => {
    if (confirm("정말 삭제하시겠습니까? 삭제하면 되돌릴 수 없습니다!")) {
      router.push(`/adminpage/adminhome`);
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
