import create from "zustand";
import axios from "axios";

// 상태 관리
const weatherInfo = create((set) => ({
  weather: null,
  city: "",
  loading: false,
  error: null,

  // 도시 업데이트 함수
  setCity: (newCity) => set({ city: newCity }),

  // 날씨 정보 함수
  fetchWeather: async (city) => {
    set({ loading: true, error: null }); // 로딩 상태 시작

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e0a5f955e8fad5833e239784df225dd&units=metric`
      );

      // 날씨 업데이트
      set({ weather: response.data, loading: false });
    } catch (error) {
      // 오류 발생 시 업데이트
      set({ error: error.message, loading: false });
    }
  },
}));

export default weatherInfo;
