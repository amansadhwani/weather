import Tab from "./components/Tab";
import React, { useEffect, useState } from "react";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import { Weather } from "./components/Weather/Weather";
import { useApi } from "./services/useApi";

const cities = [
  { name: "Ottawa", id: 0, lat: "45.4215", lng: "75.6972" },
  { name: "Moscow", id: 1, lat: "55.7558", lng: "37.6173" },
  { name: "Tokyo", id: 2, lat: "35.6762", lng: "139.6503" },
];

function App() {
  const [currentIndex, setIndex] = useState<Number>(0);

  const handleChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  const { data, loading } = useApi("45.4215", "75.6972");

  return (
    <div className="App">
      <Tab value={currentIndex} onChange={handleChange}>
        <Tab.Heads>
          {cities.map((city) => {
            return <Tab.Item key={city.id} label={city.name} index={city.id} />;
          })}
        </Tab.Heads>
      </Tab>
      <Weather />
      <WeatherCard />
    </div>
  );
}
export default App;

// process.env.REACT_APP_API_URL
