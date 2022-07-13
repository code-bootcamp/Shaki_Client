import { ChangeEvent, RefObject } from "react";
import * as S from "./UploadsMain.styles";

interface IUploadsUI {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadsMainImgUI(props: IUploadsUI) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <S.MainWrapper>
            <S.Main src="/noimage/noimage.png" />
          </S.MainWrapper>
        </S.UploadButton>
      )}
      {/* <S.DeleteButtons>
        <S.Button>사진 삭제</S.Button>
      </S.DeleteButtons> */}

      <S.UploadFile
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
