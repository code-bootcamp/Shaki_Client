import { ChangeEvent, RefObject } from "react";
import * as S from "./Uploads.styles";

interface IUploadsUI {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadsUI(props: IUploadsUI) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <S.UploadWrapper>
            <S.MainWrapper>
              <S.Main src="/noimage/noimage.png" />
            </S.MainWrapper>
            <S.SubImageWrapper>
              <S.SubImageOne>
                <S.SubImage src="/noimage/noimage.png" />
                <S.SubImage src="/noimage/noimage.png" />
              </S.SubImageOne>
              <S.SubImageWrappertwo>
                <S.SubImagetwo src="/noimage/noimage.png" />
                <S.SubImagetwo src="/noimage/noimage.png" />
              </S.SubImageWrappertwo>
            </S.SubImageWrapper>
          </S.UploadWrapper>
        </S.UploadButton>
      )}

      <S.UploadFile
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
