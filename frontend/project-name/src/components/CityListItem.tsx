
import type { City } from '../store/types';
import ExpandablePanel from "./ExpPanel";
import FoodsList from "./FoodsList";

interface CityListItemProps {
  city: City;
}

function CityListItem({ city }: CityListItemProps) {
  const header = (
    <>
      {city.name}
    </>
  );

  return (
    <ExpandablePanel key={city.id} header={header}>
      <FoodsList cityId={city.id} />
    </ExpandablePanel>
  );
}

export default CityListItem;