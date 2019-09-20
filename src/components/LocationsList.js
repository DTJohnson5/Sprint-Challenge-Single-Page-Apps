import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/").then(res => {
      setPlaces(res.data.results);
    });
  }, []);

  console.log(places);
  return (
    <section className="location-list grid-view">
      {places.map(loc => {
        return (
          <LocationCard
            key={loc.name}
            name={loc.name}
            dimension={loc.dimension}
            residents={loc.residents.length}
          />
        );
      })}
    </section>
  );
}
