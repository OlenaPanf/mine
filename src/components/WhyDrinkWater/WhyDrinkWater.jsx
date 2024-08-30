import css from "./WhyDrinkWater.module.css";

export default function WhyDrinkWater() {
  return (
    <div className={css.why}>
      <div className={css.cardWhy}>
        <h3 className={css.cardTitle}>Why drink water</h3>
        <ul className={css.cardWhyList}>
          <li className={css.cardWhyItem}>
                <svg
              className={css.cardItemSvg}
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/icons/icons.svg#icon-ellipse"></use>
                </svg>
            <p className={css.cardWhyItemText}>
                  Supply of nutrients to all organs
                </p>
              </li>
              <li className={css.cardWhyItem}>
                <svg
                  className={css.cardItemSvg}
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/icons/icons.svg#icon-ellipse"></use>
                </svg>
                <p className={css.cardWhyItemText}>
                  Providing oxygen to the lungs
                </p>
              </li>
              <li className={css.cardWhyItem}>
                <svg
                  className={css.cardItemSvg}
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/icons/icons.svg#icon-ellipse"></use>
                </svg>
                <p className={css.cardWhyItemText}>
                  Maintaining the work of the heart
                </p>
              </li>
              <li className={css.cardWhyItem}>
                <svg
                  className={css.cardItemSvg}
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/icons/icons.svg#icon-ellipse"></use>
                </svg>
                <p className={css.cardWhyItemText}>
                  Release of processed substances
                </p>
              </li>
              <li className={css.cardWhyItem}>
                <svg
                  className={css.cardItemSvg}
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/icons/icons.svg#icon-ellipse"></use>
                </svg>
                <p className={css.cardWhyItemText}>
                  Ensuring the stability of the internal environment
                </p>
              </li>
              <li className={css.cardWhyItem}>
                <svg
                  className={css.cardItemSvg}
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/icons/icons.svg#icon-ellipse"></use>
                </svg>
                <p className={css.cardWhyItemText}>
                  Maintaining within the normal temperature
                </p>
              </li>
              <li className={css.cardWhyItem}>
                <svg
                  className={css.cardItemSvg}
                  width="8"
                  height="8"
                  aria-label="ellipse icon"
                >
                  <use href="./images/icons/icons.svg#icon-ellipse"></use>
                </svg>
                <p className={css.cardWhyItemText}>
                  Maintaining an immune system capable of resisting disease
                </p>
              </li>
            </ul>
          </div>
        </div>
  );
};