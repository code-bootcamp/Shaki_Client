import * as Ad from "./AdminWrite.styles";

export default function AdminWriteUI() {
  return (
    <Ad.WrapperRoot>
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
            <Ad.Title />
          </Ad.TitleWrapper>
          <Ad.RemarksWrapper>
            <Ad.RemarksLabel>한 줄 소개: </Ad.RemarksLabel>
            <Ad.Remarks />
          </Ad.RemarksWrapper>
          <Ad.TagsWrapper>
            <Ad.TagsLabel>태그: </Ad.TagsLabel>
            <Ad.Tags />
            <Ad.PersonLabel>인원 수: </Ad.PersonLabel>
            <Ad.PersonSelect type="number" min={0} max={8} />
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
              <Ad.Address />
              <Ad.AddressDetail />
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
          <Ad.SubmitButton variant="outlined">등록하기</Ad.SubmitButton>
        </Ad.Buttons>
      </Ad.Wrapper>
    </Ad.WrapperRoot>
  );
}
