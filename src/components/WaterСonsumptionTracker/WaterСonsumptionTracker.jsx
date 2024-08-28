import css from "./WaterСonsumptionTracker.css";

export default function WaterСonsumptionTracker() {
  return (
    <div className={css.container}>
      <div>
          <h1>Water consumption tracker</h1>
          <h2>Record daily water intake and track</h2>
          <h3>Tracker Benefits</h3>
          <ul>
            <li>
              <div>
                <svg
                  //class="benefits-first-svg-icon"
                  width="32"
                  height="32"
                  aria-label="calendar icon"
                >
                  <use href="./images/symbol-defs.svg#icon-calendar"></use>
                </svg>
              </div>
              <p>Habit drive</p>
            </li>
            <li>
              <div>
                <svg
                  //class="benefits-first-svg-icon"
                  width="32"
                  height="32"
                  aria-label="checkmark icon"
                >
                  <use
                    href="./images/symbol-defs.svg#icon-presentation-chart-bar"
                  ></use>
                </svg>
              </div>
              <p>View statistics</p>
            </li>
            <li>
              <div >
                <svg
                  //class="benefits-first-svg-icon"
                  width="32"
                  height="32"
                  aria-label="diagram icon"
                >
                  <use href="./images/symbol-defs.svg#icon-tools"></use>
                </svg>
              </div>
              <p >Personal rate setting</p>
            </li>
          </ul>
          <button  type="button">Try tracker</button>
        </div>
    </div>
  );
};