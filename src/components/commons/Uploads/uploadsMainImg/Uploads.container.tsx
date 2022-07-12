import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import UploadsMainImgUI from "../uploadsMainImg/Uploads.presenter";
import { UPLOAD_FILE } from "./Uploads.queries";
import { checkValidationImage } from "./Uploads.validation";

interface IUploads {
  index: number;
  fileUrl: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export default function UploadsMain(props: IUploads) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    const result = await uploadFile({ variables: { file } });
    props.onChangeFileUrls(result.data.uploadFile.url, props.index);
  };

  return (
    <UploadsMainImgUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
