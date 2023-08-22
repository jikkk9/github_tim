import React, { useEffect, useRef } from 'react';

function NaverMap() {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const infowindowsRef = useRef([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=9otoznouwk';
    document.head.appendChild(script);

    script.onload = () => initializeMap();
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5665, 126.9780),
      zoom: 10,
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);

    const locations = [
      { lat: 37.5665, lng: 126.9780, name: '서울시청' },
      { lat: 37.5139, lng: 127.1023, name: '강남역' },
      { lat: 37.5796, lng: 126.9770, name: '경복궁' },
    ];

    locations.forEach((location, index) => {
      createMarker(location, index, map);
    });
  };

  const createMarker = (location, index, map) => {
    const markerPosition = new window.naver.maps.LatLng(location.lat, location.lng);
    const marker = new window.naver.maps.Marker({
      position: markerPosition,
      map: map,
    });

    const contentString = `<div style="padding:10px;">${location.name}</div>`;
    const infowindow = new window.naver.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    markersRef.current.push(marker);
    infowindowsRef.current.push(infowindow);
  };

  const moveToLocation = (lat, lng) => {
    const map = mapRef.current; // 현재의 지도 인스턴스를 가져옵니다.
    const center = new window.naver.maps.LatLng(lat, lng);
    map.setCenter(center);
    map.setZoom(15); // 원하는 확대 수준으로 설정합니다. 15는 예시입니다.
  };

  const locations = [
    { lat: 37.5665, lng: 126.9780, name: '서울시청', address: '서울시 중구 세종대로 110' },
    { lat: 37.5139, lng: 127.1023, name: '강남역', address: '서울시 강남구 테헤란로' },
    { lat: 37.5796, lng: 126.9770, name: '경복궁', address: '서울시 종로구 사직로' },
    // 추가로 다른 지점들의 정보도 여기에 추가할 수 있습니다.
  ];

  return (
    <div className='NaverMap'>
      <div className='sub_menu'>
        <div className='sub_menu_top'>
          <h2>온비즈 오피스</h2>
          <p>지점안내</p>
        </div>

        <div className='sub_menu_bop'>
          <ul>
            {locations.map((location) => (
              <li key={location.name} onClick={() => moveToLocation(location.lat, location.lng)}>
                <h2>{location.name}</h2>
                <p>{location.address}</p>
              </li>
            ))}
            {/* <li>
              <h2 >점</h2>
              <p>서울시 성동구 상원 1길 25 SOL빌딩 4층</p>
            </li>
            <li>
              <h2>서울 역삼점</h2>
              <p>서울시 강남구 언주로 506</p>
            </li>
            <li>
              <h2>서울 서초점</h2>
              <p>서울시 서초구 서초대로 357</p>
            </li>
            <li>
              <h2>서울 강남점</h2>
              <p>서울시 강남구 대치동 942-15 디아이타워</p>
            </li>
            <li>
              <h2>서울 구로점</h2>
              <p>서울시 구로구 구로로</p>
            </li>
            <li>
              <h2>서울 성수점</h2>
              <p>서울시 성동구 상원 1길 25 SOL빌딩 4층</p>
            </li>
            <li>
              <h2>서울 성수점</h2>
              <p>서울시 성동구 상원 1길 25 SOL빌딩 4층</p>
            </li> */}
          </ul>
        </div>
      </div>
      <div className='sub_map' id="map" ref={mapRef} />
    </div>
  );
}

export default NaverMap;
