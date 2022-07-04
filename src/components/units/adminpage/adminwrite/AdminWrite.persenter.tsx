import * as Ad from "./AdminWrite.styles";

export default function AdminWriteUI() {
  return (
    <Ad.WrapperRoot>
      <Ad.Wrapper>
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
            <Ad.PersonLabel>인원 수</Ad.PersonLabel>
            <Ad.PersonSelect name="person">
              <Ad.Person value="" selected>
                인원을 선택해주세요.
              </Ad.Person>
              <Ad.Person value="0">0</Ad.Person>
              <Ad.Person value="1">1</Ad.Person>
              <Ad.Person value="2">2</Ad.Person>
              <Ad.Person value="3">3</Ad.Person>
              <Ad.Person value="4">4</Ad.Person>
              <Ad.Person value="5">5</Ad.Person>
              <Ad.Person value="6">6</Ad.Person>
              <Ad.Person value="7">7</Ad.Person>
              <Ad.Person value="8">8</Ad.Person>
            </Ad.PersonSelect>
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
