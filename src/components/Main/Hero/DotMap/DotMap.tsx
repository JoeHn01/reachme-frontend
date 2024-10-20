import React from 'react';
import DottedMap from 'dotted-map/without-countries';
import { getMapJSON } from 'dotted-map';
import styles from './DotMap.module.css';

const mapJsonString = getMapJSON({ height: 90, grid: 'vertical' });

const locations = [
  { lat: 60.1699, lng: 24.9384 }, // Helsinki, Finland (Northern Europe)
  { lat: 59.3293, lng: 18.0686 }, // Stockholm, Sweden (Northern Europe)
  { lat: 41.9028, lng: 12.4964 }, // Rome, Italy
  { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA (West Coast)
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA (West Coast)
  { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japan
  { lat: 39.9042, lng: 116.4074 }, // Beijing, China (Asia)
  { lat: 28.7041, lng: 77.1025 }, // New Delhi, India (Asia)
  { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
  { lat: -37.8136, lng: 144.9631 }, // Melbourne, Australia
];

const DotMap: React.FC = () => {
  const map = new DottedMap({ map: JSON.parse(mapJsonString) });

  locations.forEach((location) => {
    // map.addPin({
    //   lat: location.lat,
    //   lng: location.lng,
    //   svgOptions: { color: '#F9B4B6', radius: 0.7 },
    // });
    // map.addPin({
    //   lat: location.lat,
    //   lng: location.lng,
    //   svgOptions: { color: '#E2676C', radius: 0.55 },
    // });
    // two larger circles around active dots
    // (they get overwritten by the last added pin)

    map.addPin({
      lat: location.lat,
      lng: location.lng,
      svgOptions: { color: '#D03A3D', radius: 0.4 },
    });
  });

  const svgMap = map.getSVG({
    radius: 0.3,
    color: '#D0D5DD',
    shape: 'circle',
    backgroundColor: 'white',
  });

  return (
    <div className={styles.mapWrapper}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt="Dotted Map"
        className={styles.mapImage}
      />
    </div>
  );
};

export default DotMap;
