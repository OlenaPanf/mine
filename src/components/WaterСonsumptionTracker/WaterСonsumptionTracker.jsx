import css from "./WaterСonsumptionTracker.module.css";

export default function WaterСonsumptionTracker() {
  return (
    <div >
      <div className={css.record}>
        <h1 className={css.mainTitle}>Water consumption tracker</h1>
        <h2 className={css.title}>Record daily water intake and track</h2>
        <div className={css.card}>
          <h3 className={css.cardTitle}>Tracker Benefits</h3>
          <ul className={css.cardRecordList}>
            <li className={css.cardRecordItem}>
                <svg
                className={css.cardRecordItemIcon}
                  width="32"
                  height="32"
                  aria-label="calendar icon"
                >
                  <use href="../../images/icons/icons.svg#icon-calendar"></use>
                </svg>
              <p className={css.cardRecordItemText}>Habit drive</p>
              </li>
              <li className={css.cardRecordItem}>
                <svg
                  className={css.cardRecordItemIcon}
                  width="32"
                  height="32"
                  aria-label="checkmark icon"
                >
                  <use
                    href="../../images/icons/icons.svg#icon-presentation-chart-bar"
                  ></use>
                </svg>
                <p className={css.cardRecordItemText}>View statistics</p>
              </li>
              <li className={css.cardRecordItem}>
                <svg
                  className={css.cardRecordItemIcon}
                  width="32"
                  height="32"
                  aria-label="diagram icon"
                >
                  <use href="../../images/icons/icons.svg#icon-tools"></use>
                </svg>
                <p className={css.cardRecordItemText}>Personal rate setting</p>
              </li>
            </ul>
          </div>
        <button className={css.button} type="button">Try tracker</button>
        </div>
    </div>
  );
};