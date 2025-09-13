import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.tsx';

function MyTripPage() {
  const navigate = useNavigate();

  const locations = [
    { name: 'London', route: '/london'},
    { name: 'Berlin', route: '/berlin'},
    { name: 'Paris', route: '/paris' },
    { name: 'Custom', route: '/custom' },
  ];

  const handleLocationClick = (route: string) => {
    navigate(route);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 justify-center items-center">
      <h1 className="text-6xl font-bold">Choose the starting location</h1>

      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {locations.map((location) => (
          <Button
            key={location.name}
            primary
            onClick={() => handleLocationClick(location.route)}
          >
            {location.name}
          </Button>
        ))}

      </div>
    </div>
  );
}

export default MyTripPage;