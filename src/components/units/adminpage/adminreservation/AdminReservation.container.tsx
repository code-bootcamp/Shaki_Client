import { useQuery } from "@apollo/client";
import AdminReservationUI from "./AdminReservation.presenter";
import { FETCH_PAYMENTS } from "./AdminReservation.queries";

export default function AdminReservation() {
  const { data } = useQuery(FETCH_PAYMENTS);
  return <AdminReservationUI data={data} />;
}
