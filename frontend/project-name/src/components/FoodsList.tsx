// In your component
import { useFetchFoodsByCityQuery } from '../store/api/foodsApi';

interface FoodsListProps {
  cityId: number;
}

function FoodsList({ cityId }: FoodsListProps) {
  const { data: foods, isLoading, error } = useFetchFoodsByCityQuery({ cityId });

  if (isLoading) return <div>Loading foods...</div>;
  if (error) return <div>Error loading foods</div>;

  return (
    <div>
      {foods?.map(food => (
        <div key={food.id}>
          {food.name} - ${food.price}
        </div>
      ))}
    </div>
  );
}

export default FoodsList;