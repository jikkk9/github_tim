import React, { useEffect, useRef, useState } from 'react';

const locations = [
  { lat: 37.545856000000505, lng: 127.03959867903585, name: '성수점', address: '서울시 성동구 상원 1길 25 SOL빌딩 4층' },
  { lat: 37.50341109999992, lng: 127.04076069999972, name: '서울 역삼점', address: '서울시 강남구 언주로 506' },
  { lat: 37.496168499999925, lng: 127.01995249999969, name: '서울 서초점', address: '서울시 서초구 서초대로 357' },
  { lat: 37.506035850083364, lng: 127.05799838461753, name: '서울 강남점', address: '서울시 강남구 대치동 942-15 디아이타워' },
  { lat: 37.5796, lng: 126.9770, name: '서울 구로점', address: '서울시 구로구 구로로' },
  { lat: 37.5796, lng: 126.9770, name: '서울 경복궁점', address: '서울시 종로구 사직로' },
];

function NaverMap() {

  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const infowindowsRef = useRef([]);
  const [mapInstance, setMapInstance] = useState(null);
  const [showSubpage, setShowSubpage] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showOnlyMap, setShowOnlyMap] = useState(false);
  const [centerChanged, setCenterChanged] = useState(false);
  useEffect(() => {
    if (showOnlyMap && window.naver && window.naver.maps && mapRef.current && mapInstance) {
      window.naver.maps.Event.trigger(mapInstance, 'resize');
      if (!centerChanged) {  // centerChanged가 false일 때만 중심을 변경
        mapInstance.setCenter(new window.naver.maps.LatLng(37.5665, 126.9780));
      }
    }
  }, [showOnlyMap, mapInstance, centerChanged]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=9otoznouwk';
    document.head.appendChild(script);

    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.5665, 126.9780),
        zoom: 10,
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);
      setMapInstance(map);
      locations.forEach((location, index) => {
        createMarker(location, index, map);
      });
    };
  }, []);

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
    if (!mapInstance) return;
    // setShowOnlyMap(true); // 여기에 추가
    const center = new window.naver.maps.LatLng(lat, lng);
    mapInstance.setCenter(center);
    mapInstance.setZoom(15);
    setShowOnlyMap(true);
    setCenterChanged(true);  // 중심이 변경되었음을 표시

  };

  const handleLocationClick = (location) => {
    if (showSubpage && selectedLocation === location) {
      setSelectedLocation(null);
      setShowSubpage(false);
    } else {
      setSelectedLocation(location);
      moveToLocation(location.lat, location.lng);
      setShowSubpage(true);
    }
  };

  const handleCloseSubpage = () => {
    setSelectedLocation(null);
    setShowSubpage(false);
  };

  const handleBackClick = () => {
    setShowOnlyMap(false);
  };

  return (
    <div className={`NaverMap ${showOnlyMap ? 'only-map' : ''}`}>
      {showOnlyMap && <button className="back-button" onClick={handleBackClick}>뒤로 가기</button>}
      <div className='sub_menu'>
        <div className='sub_menu_top'>
          <h2>온비즈 오피스</h2>
          <p>지점안내</p>
        </div>
        <div className='sub_menu_bop'>
          <ul>
            {locations.map((location) => (
              <li key={location.name} onClick={() => handleLocationClick(location)}>
                <h2>{location.name}</h2>
                <p>{location.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className='sub_map' id="map" ref={mapRef} />
    </div>



  );
}

export default NaverMap;
