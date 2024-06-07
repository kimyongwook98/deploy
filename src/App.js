import React, { useState } from "react";
import weatherInfo from "./store/store";

function App() {
  const { weather, city, loading, error, setCity, fetchWeather } =
    weatherInfo(); // 상태
  const [inputCity, setInputCity] = useState(""); // 도시 입력

  const handleFetchWeather = () => {
    // 날씨 정보 불러오기
    setCity(inputCity);
    fetchWeather(inputCity);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>날씨를 알려드립니다</h1>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="도시 이름을 영어로 검색해보세요"
      />
      <button onClick={handleFetchWeather} disabled={loading}>
        {loading ? "로딩중" : "검색"}
      </button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>온도 : {weather.main.temp}°C</p>
          <p>날씨 : {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
