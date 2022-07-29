import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import UploadsMainImgUI from "./UploadsMain.presenter";
import { UPLOAD_FILE } from "./UploadsMain.queries";
import { checkValidationImage } from "./UploadsMain.validation";

interface IUploads {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeImgMainUrls: (fileUrl: string, index: number) => void;
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

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    props.onChangeImgMainUrls(result.data.uploadFile, props.index);
  };

  return (
    <UploadsMainImgUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      // onClickDelete={onClickDelete}
    />
  );
}
