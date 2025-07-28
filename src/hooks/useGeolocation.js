import { useEffect, useState } from "react";

// A hook that will be used to get the user's current geographic location
export default function useGeolocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    function success(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }

    function error() {
      console.log("Error");
    }

    console.log(navigator.geolocation.getCurrentPosition(success, error));
  }, []);

  return { latitude, longitude };
}
