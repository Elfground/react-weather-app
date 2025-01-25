import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import WeatherData from "./WeatherData";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section>
        <Header />
        <main>
          <CurrentWeather city="Falun" temperature={-14} />
          <WeatherData
            day="Sunday"
            time="18:50"
            humidity={70}
            windspeed={0.97}
            conditions="scattered clouds"
          />
          <div class="weather-forecast" id="forecast"></div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
