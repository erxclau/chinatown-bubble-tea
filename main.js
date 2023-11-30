import mapboxgl from "mapbox-gl";

function main() {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ericlau/clpkvyb4q00gk01qu3cko9jco",
    center: [-73.996881, 40.715723],
    zoom: 14.85,
    minZoom: 14.85,
  });
}

main();
