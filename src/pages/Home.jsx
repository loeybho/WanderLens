import { useCallback, useEffect, useRef } from "react";

const locations = [
  { title: "vancouver", position: { lat: 49.2576182, lng: -123.2887105 } },
  { title: "vietnam", position: { lat: 14.073694, lng: 108.413399 } },
  { title: "mongolia", position: { lat: 47.0008262, lng: 103.0839711 } },
];

function Home() {
  const mapRef = useRef(null);

  console.log(window.google.maps);

  const initMap = useCallback(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 40.397, lng: 150.644 },
      zoom: 2,
      mapId: "DEMO_MAP_ID",
    });

    locations.forEach((location) => {
      new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: location.position,
        title: location.title,
      });
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <div
      className="map"
      style={{ width: "100vw", height: "600px" }}
      ref={mapRef}
    ></div>
  );
}

export default Home;
