import * as Ad from "./AdminWrite.styles";

export default function AdminWriteUI() {
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
        <Ad.HeadWrapper>
          <Ad.HeadLogo />
          <Ad.AdminWrapper>
            <Ad.AdminName>관리자 이름</Ad.AdminName>
          </Ad.AdminWrapper>
        </Ad.HeadWrapper>

        <Ad.OptionWrapper>
          <Ad.OptionNew>가맹점 등록하기</Ad.OptionNew>
          <Ad.OptionQuestion>문의 답변보내기</Ad.OptionQuestion>
        </Ad.OptionWrapper>

        <Ad.BodyWrapper>
          <Ad.TitleWrapper>
            <Ad.Label>Title</Ad.Label>
            <Ad.Title />
            <Ad.Label>Remark</Ad.Label>
            <Ad.Remark />
          </Ad.TitleWrapper>
          <Ad.TagsWrapper>
            <Ad.Label>Tags</Ad.Label>
            <Ad.Tags />
            <Ad.PersonLabel>가능인원</Ad.PersonLabel>
            <Ad.Person type="number" min={0} />
          </Ad.TagsWrapper>

          <Ad.ContentsWrapper>
            <Ad.Label>Contents</Ad.Label>
            <Ad.Contents />
          </Ad.ContentsWrapper>

          <Ad.AddressWrapper>
            <Ad.MapWrapper>
              <Ad.Map></Ad.Map>
            </Ad.MapWrapper>
            <Ad.AddressDetailWrapper>
              <Ad.Label>주소 등록</Ad.Label>
              <Ad.AddressSearchWrapper>
                <Ad.AddressCode placeholder="12345" />
                <Ad.AddressSearchButton>우편번호 검색</Ad.AddressSearchButton>
              </Ad.AddressSearchWrapper>
              <Ad.Address />
              <Ad.AddressDetail />
            </Ad.AddressDetailWrapper>
          </Ad.AddressWrapper>

          <Ad.ImageWrapper>
            <Ad.MainWrapper>
              <Ad.Main></Ad.Main>
            </Ad.MainWrapper>
            <Ad.SubImageWrapper>
              <Ad.SubImageOne>
                <Ad.SubImage></Ad.SubImage>
                <Ad.SubImage></Ad.SubImage>
              </Ad.SubImageOne>
              <Ad.SubImageWrappertwo>
                <Ad.SubImagetwo></Ad.SubImagetwo>
                <Ad.SubImagetwo></Ad.SubImagetwo>
              </Ad.SubImageWrappertwo>
            </Ad.SubImageWrapper>
          </Ad.ImageWrapper>
        </Ad.BodyWrapper>

        <Ad.Button>
          <Ad.SubmitButton>등록하기</Ad.SubmitButton>
        </Ad.Button>
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
