// 카카오맵 공통 폴더
// 카카오 맵 감싸는 div에 스타일 주는 쪽으로 카카오맵 크기 조절할 것.
// 38 번줄 타입 고민해보기.
import * as KS from "./kakaomap.styles";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=808a7e45f480ecab7838f078e915a2c6&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5557, 127.0055), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
          draggable: false,
        };
        const rvContainer = document.getElementById("roadview"); // 로드뷰를 표시할 div 입니다

        // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 로드뷰 객체를 생성합니다
        const roadview = new window.kakao.maps.Roadview(rvContainer, mapOption);
        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 특정 좌표에서 반경 내 가장 가까운 로드뷰 파노라마 ID를 구한다.
              // PanoID = 파노라마 ID
              let roadviewClient = new window.kakao.maps.RoadviewClient();
              roadviewClient.getNearestPanoId(
                coords,
                50,
                function (panoId: any) {
                  roadview.setPanoId(panoId, coords);
                }
              );

              roadview.setViewpoint({
                pan: 321,
                tilt: 0,
                zoom: 0,
              });

              // 결과값으로 받은 위치를 마커로 표시합니다
              let marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              // 로드뷰 마커생성
              window.kakao.maps.event.addListener(
                roadview,
                "init",
                function () {
                  // 로드뷰에 특정 장소를 표시할 마커를 생성하고 로드뷰 위에 표시합니다
                  marker = new window.kakao.maps.Marker({
                    position: coords,
                    map: roadview,
                  });
                }
              );

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">지점위치</div>',
              });
              infowindow.open(map, marker, roadview);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address || ""]);

  const [isToggle, setIsToggle] = useState(false);
  const ToggleMap = () => {
    setIsToggle((prev) => !prev);
  };
  return (
    <KS.KakaoWrapper>
      <KS.KakaoBtn onClick={ToggleMap}>
        {isToggle ? "지도" : "로드뷰"}보기
      </KS.KakaoBtn>
      <KS.KakaoMapDiv id="map" isToggle={isToggle}></KS.KakaoMapDiv>
      <KS.KakaoRoadView id="roadview" isToggle={isToggle}></KS.KakaoRoadView>
    </KS.KakaoWrapper>
  );
}
