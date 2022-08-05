import { useQuery } from "@apollo/client";
import { useAdminAuth } from "../../../../hooks/useAdminAuth";
import AdminReservationUI from "./AdminReservation.presenter";
import { FETCH_PAYMENTS } from "./AdminReservation.queries";

function AdminReservation() {
  const { data } = useQuery(FETCH_PAYMENTS);
  console.log(data);
  return <AdminReservationUI data={data} />;
}

export default useAdminAuth(AdminReservation);
