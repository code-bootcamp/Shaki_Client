import * as Ad from "./AdminWrite.styles";
import DaumPostcode from "react-daum-postcode";
import KakaoMap from "../../../../commons/kakaomap";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import UploadsMain from "../../../commons/Uploads/uploadsMainImg/Uploads.container";
import UploadsSubOne from "../../../commons/Uploads/uploadsSubOneImg/Uploads.container";
import UploadsSubTwo from "../../../commons/Uploads/uploadsSubTwoImg/Uploads.container";

interface IAdminWriteUI {
  register: any;
  handleSubmit: any;
  formState: any;
  isModalView: boolean;
  address: string;
  zipcode: string | number;
  imgMainUrls: string[];
  imgSubOneUrls: string[];
  imgSubTwoUrls: string[];
  onToggleModal: () => void;
  handelCompleteDaum: (addressData: any) => void;
  onChangeContents: (value: string) => void;
  onChangeImgMainUrls: (imgUrls: string, index: number) => void;
  onChangeImgSubOneUrls: (imgUrls: string, index: number) => void;
  onChangeImgSubTwoUrls: (imgUrls: string, index: number) => void;
  onClickSubmit: (data: any) => void;
}

export default function AdminWriteUI(props: IAdminWriteUI) {
  return (
    <>
      {props.isModalView && (
        <Modal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <DaumPostcode onComplete={props.handelCompleteDaum} />
        </Modal>
      )}
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
            <Ad.BodyFirstWrapper>
              <Ad.TitleWrapper>
                <Ad.TitleLabel>지점명:</Ad.TitleLabel>
                <Ad.Title
                  type="text"
                  placeholder="ㅇㅇ점으로 입력해주세요! ex) 구로점 or 신림점"
                  {...props.register("branch")}
                />
                <Ad.Error>{props.formState.errors.branch?.message}</Ad.Error>
              </Ad.TitleWrapper>

              <Ad.RoomNumberWrapper>
                <Ad.RoomNumberLabel>룸 이름:</Ad.RoomNumberLabel>
                <Ad.RoomNumber
                  type="text"
                  placeholder="쉐이키 뒤에 룸 번호를 입력해주세요! ex) 쉐이키 1 or 쉐이키 2"
                  {...props.register("name")}
                />
                <Ad.Error>{props.formState.errors.name?.message}</Ad.Error>
              </Ad.RoomNumberWrapper>
            </Ad.BodyFirstWrapper>

            <Ad.RemarksWrapper>
              <Ad.RemarksLabel>한 줄 소개: </Ad.RemarksLabel>
              <Ad.Remarks
                type="text"
                placeholder="룸을 소개할 수 있는 한 줄 느낌을 작성해주세요! 예를 들어 깔끔하고 모던한 느낌의 구로점 쉐이키 1"
                {...props.register("remarks")}
              />
              <Ad.Error>{props.formState.errors.remarks?.message}</Ad.Error>
            </Ad.RemarksWrapper>

            <Ad.TagsWrapper>
              <Ad.TagsLabel>태그: </Ad.TagsLabel>
              <Ad.Tags
                type="text"
                placeholder="태그내용을 입력해주세요! ex) #모던한분위기 #제주도느낌 #연인 #가족"
                {...props.register("tags")}
              />
              <Ad.Error>{props.formState.errors.tags?.message}</Ad.Error>
            </Ad.TagsWrapper>

            <Ad.BodyFirstWrapper>
              <Ad.PriceWrapper>
                <Ad.PriceLabel>가격: </Ad.PriceLabel>
                <Ad.Price
                  type="text"
                  placeholder="시간당 가격을 적어주세요!"
                  {...props.register("price")}
                />
                <Ad.Error>{props.formState.errors.price?.message}</Ad.Error>
              </Ad.PriceWrapper>
              <Ad.PersonWrapper>
                <Ad.PersonLabel>인원 수: </Ad.PersonLabel>
                <Ad.PersonSelect
                  type="number"
                  placeholder="최대인원 수 8명"
                  min={0}
                  max={8}
                  {...props.register("maxPeople")}
                />
                <Ad.Error>{props.formState.errors.maxPeople?.message}</Ad.Error>
              </Ad.PersonWrapper>
            </Ad.BodyFirstWrapper>

            <Ad.ContentsWrapper>
              <Ad.ContentsLabel>Contents</Ad.ContentsLabel>
              <Ad.ReactQuillWrapper>
                <Ad.Contents onChange={props.onChangeContents} />
                <Ad.ContentsError>
                  {props.formState.errors.contents?.message}
                </Ad.ContentsError>
              </Ad.ReactQuillWrapper>
            </Ad.ContentsWrapper>

            <Ad.AddressWrapper>
              <Ad.MapWrapper>
                <Ad.Map>
                  <KakaoMap address={props.address} />
                </Ad.Map>
              </Ad.MapWrapper>
              <Ad.AddressDetailWrapper>
                <Ad.AddressLabel>주소 등록</Ad.AddressLabel>
                <Ad.AddressSearchWrapper>
                  <Ad.AddressCode placeholder="12345" value={props.zipcode} />
                  <Ad.AddressSearchButton
                    type="button"
                    onClick={props.onToggleModal}
                  >
                    우편번호 검색
                  </Ad.AddressSearchButton>
                </Ad.AddressSearchWrapper>
                <Ad.Address type="text" value={props.address} />
                <Ad.AddressError></Ad.AddressError>
                <Ad.AddressDetail type="text" />
              </Ad.AddressDetailWrapper>
            </Ad.AddressWrapper>

            <Ad.ImageWrapper>
              {props.imgMainUrls.map((el, index) => (
                <UploadsMain
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeImgMainUrls}
                />
              ))}
              <Ad.Img>
                <Ad.ImgSubOneWrapper>
                  {props.imgSubOneUrls.map((el, index) => (
                    <UploadsSubOne
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeImgSubOneUrls}
                    />
                  ))}
                </Ad.ImgSubOneWrapper>
                <Ad.ImgSubTwoWrapper>
                  {props.imgSubTwoUrls.map((el, index) => (
                    <UploadsSubTwo
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeImgSubTwoUrls}
                    />
                  ))}
                </Ad.ImgSubTwoWrapper>
              </Ad.Img>
            </Ad.ImageWrapper>
          </Ad.BodyWrapper>

          <Ad.Buttons>
            <Ad.SubmitButton isActive={props.formState.isValid}>
              등록하기
            </Ad.SubmitButton>
          </Ad.Buttons>
        </Ad.Wrapper>
      </Ad.WrapperRoot>
    </>
  );
}
