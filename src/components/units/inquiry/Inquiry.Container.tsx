import { useQuery } from "@apollo/client";
import InquiryPresenter from "./Inquiry.Presenter";
import { FETCH_QUESTIONS } from "./Inquiry.Query";

export default function InquiryContainer() {
  const { data } = useQuery(FETCH_QUESTIONS);
  return <InquiryPresenter data={data} />;
}
