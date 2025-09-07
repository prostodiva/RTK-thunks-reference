import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/useDispatch';
import type { RootState } from '../store';
import { fetchCities } from '../store/thunks/citiesThunk';
import Button from './Button';

function CitiesList() {
  const dispatch = useAppDispatch();
  const { cities, loading, error }= useSelector((state: RootState) => state.cities);

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

  const renderedCities = cities.map((city) => {
    return <li key={city.id}>{city.name}</li>;
  });

  return (
    <div>
      <h1>Cities List</h1>
      <div>
        <Button primary onClick={() => handleShowCities()}>
          Show cities
        </Button>
      </div>
      <div>
        <ul>{renderedCities}</ul>
      </div>
    </div>
  );
}

export default CitiesList;
