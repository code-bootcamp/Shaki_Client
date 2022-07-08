import * as Ad from "./AdminWrite.styles";

interface IAdminWriteUI {
  register: any;
  handleSubmit: any;
  onClickSubmit: (data) => void;
}

export default function AdminWriteUI(props: IAdminWriteUI) {
  return (
    <Ad.WrapperRoot onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <Ad.Wrapper>
        <Ad.HeadWrapper>
          <Ad.LogoWrapper>
            <Ad.Logo src="/logo.png" />
          </Ad.LogoWrapper>
          <Ad.OptionWrapper>
            <Ad.OptionNew>가맹점 등록하기</Ad.OptionNew>
          </Ad.OptionWrapper>
        </Ad.HeadWrapper>

        <Ad.BodyWrapper>
          <Ad.TitleWrapper>
            <Ad.TitleLabel>지점명:</Ad.TitleLabel>
            <Ad.Title
              type="text"
              placeholder="ㅇㅇ점으로 입력해주세요! ex) 구로점 or 신림점"
              {...props.register("branch")}
            />
            <Ad.RoomNumberLabel>룸 이름:</Ad.RoomNumberLabel>
            <Ad.RoomNumber
              type="text"
              placeholder="쉐이키 뒤에 룸 번호를 입력해주세요! ex) 쉐이키 1 or 쉐이키 2"
              {...props.register("name")}
            />
          </Ad.TitleWrapper>

          <Ad.RemarksWrapper>
            <Ad.RemarksLabel>한 줄 소개: </Ad.RemarksLabel>
            <Ad.Remarks
              type="text"
              placeholder="룸을 소개할 수 있는 한 줄 느낌을 작성해주세요! 예를 들어 깔끔하고 모던한 느낌의 구로점 쉐이키 1"
            />
          </Ad.RemarksWrapper>
          <Ad.TagsWrapper>
            <Ad.TagsLabel>태그: </Ad.TagsLabel>
            <Ad.Tags
              type="text"
              placeholder="태그내용을 입력해주세요! ex) #모던한분위기 #제주도느낌 #연인 #가족"
            />
            <Ad.PersonLabel>인원 수: </Ad.PersonLabel>
            <Ad.PersonSelect
              type="number"
              placeholder="최대인원 수 8명"
              min={0}
              max={8}
            />
          </Ad.TagsWrapper>

          <Ad.ContentsWrapper>
            <Ad.ContentsLabel>Contents</Ad.ContentsLabel>
            <Ad.ReactQuillWrapper>
              <Ad.Contents />
            </Ad.ReactQuillWrapper>
          </Ad.ContentsWrapper>

          <Ad.AddressWrapper>
            <Ad.MapWrapper>
              <Ad.Map></Ad.Map>
            </Ad.MapWrapper>
            <Ad.AddressDetailWrapper>
              <Ad.AddressLabel>주소 등록</Ad.AddressLabel>
              <Ad.AddressSearchWrapper>
                <Ad.AddressCode placeholder="12345" />
                <Ad.AddressSearchButton>우편번호 검색</Ad.AddressSearchButton>
              </Ad.AddressSearchWrapper>
              <Ad.Address type="text" />
              <Ad.AddressDetail type="text" />
            </Ad.AddressDetailWrapper>
          </Ad.AddressWrapper>

          <Ad.ImageWrapper>
            <Ad.MainWrapper>
              <Ad.Main src="/noimage/noimage.png" />
            </Ad.MainWrapper>
            <Ad.SubImageWrapper>
              <Ad.SubImageOne>
                <Ad.SubImage src="/noimage/noimage.png" />
                <Ad.SubImage src="/noimage/noimage.png" />
              </Ad.SubImageOne>
              <Ad.SubImageWrappertwo>
                <Ad.SubImagetwo src="/noimage/noimage.png" />
                <Ad.SubImagetwo src="/noimage/noimage.png" />
              </Ad.SubImageWrappertwo>
            </Ad.SubImageWrapper>
          </Ad.ImageWrapper>
        </Ad.BodyWrapper>

        <Ad.Buttons>
          <Ad.SubmitButton>등록하기</Ad.SubmitButton>
        </Ad.Buttons>
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
