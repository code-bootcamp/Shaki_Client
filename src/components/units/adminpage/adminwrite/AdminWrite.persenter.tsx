import * as Ad from "./AdminWrite.styles";
import DaumPostcode from "react-daum-postcode";
import KakaoMap from "../../../../commons/kakaomap";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import UploadsMain from "../../../commons/Uploads/uploadsMainImg/UploadsMain.container";
import TagPage from "../../../../commons/tags";

interface IAdminWriteUI {
  register: any;
  handleSubmit: any;
  formState: any;
  isModalView: boolean;
  address: string;
  zipcode: string | number;
  imgMainUrls: string[];
  tags: string;
  setTags: string;
  isEdit?: boolean;
  roomdata?: any;

  onToggleModal: () => void;
  handelCompleteDaum: (addressData: any) => void;
  onChangeContents: (value: string) => void;
  onChangeImgMainUrls: (imgUrls: string, index: number) => void;
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
              <Ad.OptionNew>
                {props.isEdit ? "가맹점 수정하기" : "가맹점 등록하기"}
              </Ad.OptionNew>
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
                  defaultValue={props.roomdata?.fetchRoom.branch.branch}
                />
                <Ad.Error>{props.formState.errors.branch?.message}</Ad.Error>
              </Ad.TitleWrapper>

              <Ad.RoomNumberWrapper>
                <Ad.RoomNumberLabel>룸 이름:</Ad.RoomNumberLabel>
                <Ad.RoomNumber
                  type="text"
                  placeholder="쉐이키 뒤에 룸 번호를 입력해주세요! ex) 쉐이키 1 or 쉐이키 2"
                  {...props.register("name")}
                  defaultValue={props.roomdata?.fetchRoom.name}
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
                defaultValue={props.roomdata?.fetchRoom.remarks}
              />
              <Ad.Error>{props.formState.errors.remarks?.message}</Ad.Error>
            </Ad.RemarksWrapper>

            <Ad.TagsWrapper>
              <Ad.TagsLabel>태그: </Ad.TagsLabel>
              <TagPage
                tags={props.tags}
                setTags={props.setTags}
                defaultValue={props.roomdata?.fetchRoom.tags}
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
                  defaultValue={props.roomdata?.fetchRoom.price}
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
                  defaultValue={props.roomdata?.fetchRoom.maxPeople}
                />
                <Ad.Error>{props.formState.errors.maxPeople?.message}</Ad.Error>
              </Ad.PersonWrapper>
            </Ad.BodyFirstWrapper>

            <Ad.ContentsWrapper>
              <Ad.ContentsLabel>Contents</Ad.ContentsLabel>
              <Ad.ReactQuillWrapper>
                <Ad.Contents
                  onChange={props.onChangeContents}
                  defaultValue={props.roomdata?.fetchRoom.contents}
                />
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
                  <Ad.AddressCode
                    placeholder="12345"
                    readOnly
                    value={props.zipcode || props.roomdata?.fetchRoom.zipcode}
                  />
                  <Ad.AddressSearchButton
                    type="button"
                    onClick={props.onToggleModal}
                  >
                    우편번호 검색
                  </Ad.AddressSearchButton>
                </Ad.AddressSearchWrapper>
                <Ad.Address
                  type="text"
                  readOnly
                  value={props.address || props.roomdata?.fetchRoom.address}
                />
                <Ad.AddressError></Ad.AddressError>
                <Ad.AddressDetail
                  type="text"
                  {...props.register("conaddressDetail")}
                  defaultValue={props.roomdata?.fetchRoom.conaddressDetail}
                />
              </Ad.AddressDetailWrapper>
            </Ad.AddressWrapper>

            <Ad.ImageWrapper>
              {props.imgMainUrls.map((el, index) => (
                <UploadsMain
                  key={uuidv4()}
                  index={index}
                  fileUrl={el.url}
                  onChangeFileUrls={props.onChangeImgMainUrls}
                />
              ))}
            </Ad.ImageWrapper>
          </Ad.BodyWrapper>

          <Ad.Buttons>
            <Ad.SubmitButton isActive={props.formState.isValid}>
              {props.isEdit ? "수정하기" : "등록하기"}
            </Ad.SubmitButton>
          </Ad.Buttons>
        </Ad.Wrapper>
      </Ad.WrapperRoot>
    </>
  );
}
