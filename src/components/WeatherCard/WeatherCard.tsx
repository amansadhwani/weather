import "./weather.css";
export const WeatherCard = () => {
  return (
    <div className="row">
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className="column" key={item}>
            <div className="card">
              <h3>Wed</h3>
              <figure>
                <img
                  className="city-icon"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/01n.svg"
                />
              </figure>
              <p>-3.29 °C</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
