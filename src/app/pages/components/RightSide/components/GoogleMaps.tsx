import { ICoordinates } from "@src/app/interfaces/main.interface";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { FaSpinner } from "react-icons/fa";

const GoogleMaps: FC<ICoordinates> = ({ lat, lng }): ReactElement => {
  const [coordinates, setCoordinates] = useState<ICoordinates | null>(null);

  useEffect(() => {
    if (lat && lng) {
      setCoordinates({ lat, lng });
    }
  }, [lat, lng]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API || ""}>
      {coordinates ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          center={coordinates}
          zoom={15}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: [
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{ color: "#ffffff" }, { lightness: 17 }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                  { color: "#ffffff" },
                  { lightness: 29 },
                  { weight: 0.2 },
                ],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 18 }],
              },
              {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }, { lightness: 16 }],
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#dedede" }, { lightness: 21 }],
              },
              {
                elementType: "labels.text.stroke",
                stylers: [
                  { visibility: "on" },
                  { color: "#ffffff" },
                  { lightness: 16 },
                ],
              },
              {
                elementType: "labels.text.fill",
                stylers: [
                  { saturation: 36 },
                  { color: "#333333" },
                  { lightness: 40 },
                ],
              },
              {
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
              },
              {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{ color: "#fefefe" }, { lightness: 20 }],
              },
              {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [
                  { color: "#fefefe" },
                  { lightness: 17 },
                  { weight: 1.2 },
                ],
              },
            ],
          }}
        >
          <Marker position={coordinates} />
        </GoogleMap>
      ) : (
        <div className="flex justify-center items-center h-full">
          <FaSpinner className="animate-spin text-sky-400" />
        </div>
      )}
    </LoadScript>
  );
};

export default GoogleMaps;
