import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminListUI from "./AdminList.presenter";
import { FETCH_ROOMS } from "./AdminList.queries";

export default function AdminList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_ROOMS);

  const onClickMoveEdit = (event) => {
    router.push(`/adminpage/${event.currentTarget.id}/adminedit`);
  };
  console.log(data);

  return <AdminListUI data={data} onClickMoveEdit={onClickMoveEdit} />;
}
