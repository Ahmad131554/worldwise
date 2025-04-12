import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCity } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCity();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message msg="Add your first city by clicking on a city on map" />;

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityList;
