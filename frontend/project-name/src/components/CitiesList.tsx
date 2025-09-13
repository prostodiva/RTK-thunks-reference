import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/useDispatch';
import type { RootState } from '../store';
import { fetchCities } from '../store/thunks/citiesThunk';
import Button from './Button';
import CityListItem from './CityListItem';

function CitiesList() {
  const dispatch = useAppDispatch();
  const { cities, loading, error } = useSelector((state: RootState) => state.cities);

  const handleShowCities = () => {
    dispatch(fetchCities());
  };

  if (loading) {
    return <div>Loading cities...</div>;
  }

  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <Button onClick={handleShowCities}>Retry</Button>
      </div>
    );
  }

  const content = cities.map((city) => {
    return <CityListItem key={city.id} city={city} />;
  });

  return (
    <div>
      <div>
        <Button secondary onClick={() => handleShowCities()}>
          Show cities
        </Button>
      </div>
      <div>
        <ul>{content}</ul>
      </div>
    </div>
  );
}

export default CitiesList;
