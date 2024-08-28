import css from "./WhyDrinkWater.module.css";

export default function WhyDrinkWater() {
  return (
      <div className={css.container}>
          <h3>Why drink water</h3>
          <ul>
            <li>
              <div>
                <svg
                  //class="benefits-second-svg-icon"
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/symbol-defs.svg#icon-ellipse"></use>
                </svg>
              </div>
              <p>
                Supply of nutrients to all organs
              </p>
            </li>
            <li>
              <div>
                <svg
                  //class="benefits-second-svg-icon"
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/symbol-defs.svg#icon-ellipse"></use>
                </svg>
              </div>
              <p>
                Providing oxygen to the lungs
              </p>
            </li>
            <li>
              <div>
                <svg
                  //class="benefits-second-svg-icon"
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/symbol-defs.svg#icon-ellipse"></use>
                </svg>
              </div>
              <p>
                Maintaining the work of the heart
              </p>
            </li>
            <li>
              <div>
                <svg
                  //class="benefits-second-svg-icon"
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/symbol-defs.svg#icon-ellipse"></use>
                </svg>
              </div>
              <p>
                Release of processed substances
              </p>
            </li>
            <li>
              <div>
                <svg
                  //class="benefits-second-svg-icon"
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/symbol-defs.svg#icon-ellipse"></use>
                </svg>
              </div>
              <p>
                Ensuring the stability of the internal environment
              </p>
            </li>
            <li>
              <div>
                <svg
                  //class="benefits-second-svg-icon"
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/symbol-defs.svg#icon-ellipse"></use>
                </svg>
              </div>
              <p>
                Maintaining within the normal temperature
              </p>
            </li>
            <li>
              <div>
                <svg
                 // class="benefits-second-svg-icon"
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/symbol-defs.svg#icon-ellipse"></use>
                </svg>
              </div>
              <p>
                Maintaining an immune system capable of resisting disease
              </p>
            </li>
          </ul>
      </div>    
  );
};