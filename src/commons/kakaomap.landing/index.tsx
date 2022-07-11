// 카카오맵 렌딩페이지
// 여러 곳 마커찍기
import styled from "@emotion/styled";
import { useEffect } from "react";

const KakaoMapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const KakaoTab = styled.div`
  background: #4167ee;
  width: 100%;
  height: 85px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

const IconBackground = styled.div`
  background-color: lightgray;
`;

const LocationIcon = styled.img`
  margin-right: 5px;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapLanding() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=808a7e45f480ecab7838f078e915a2c6&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          // 지도 이동 막기 draggable
          draggable: false,
          center: new window.kakao.maps.LatLng(37.487519, 126.913282), // 지도의 중심좌표
          level: 5, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 주소-좌표 변환 객체를 생성합니다
        // 마커를 표시할 위치와 title 객체 배열입니다
        const positions = [
          {
            title: "구로디지털단지역점",
            latlng: new window.kakao.maps.LatLng(37.485215, 126.901594),
          },
          {
            title: "신림역",
            latlng: new window.kakao.maps.LatLng(37.484269, 126.929676),
          },
          {
            title: "신대방역",
            latlng: new window.kakao.maps.LatLng(37.487519, 126.913282),
          },
        ];

        // 마커 이미지의 이미지 주소입니다
        const imageSrc = "./landing/locationLogo.png";

        for (let i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new window.kakao.maps.Size(64, 75);

          // 마커 이미지를 생성합니다
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }

        // 끝
      });
    };
  }, []);

  return (
    <>
      <KakaoMapDiv id="map"></KakaoMapDiv>
      <KakaoTab>
        <LocationIcon src="./landing/locationWhite.png" />
        지역 지점을 확인해주세요
      </KakaoTab>
    </>
  );
}
