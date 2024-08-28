import WaterСonsumptionTracker from '../WaterСonsumptionTracker/WaterСonsumptionTracker';
import WhyDrinkWater from '../WhyDrinkWater/WhyDrinkWater';
import css from "./Main.css";


export default function Main() {
  return (
    <div className={css.container}>
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
    </div>
  );
}