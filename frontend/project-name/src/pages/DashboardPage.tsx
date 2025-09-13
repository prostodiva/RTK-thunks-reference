import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.tsx';
import CitiesList from '../components/CitiesList.tsx';

function DashboardPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/trip');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 justify-center items-center">
      <div className="space-y-4 flex flex-col items-center justify-center">
        <Button primary onClick={handleClick} className="mb-10">
          Create My Trip
        </Button>
        <CitiesList />
      </div>
    </div>
  );
}

export default DashboardPage;
