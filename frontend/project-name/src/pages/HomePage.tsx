import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-blue-900 text-3xl mt-30">Welcome to European Vacation</h1>
          <p className="text-black text-xl tracking-wide pb-4">Create a new account or {' '} 
            <Link to="/login" className="font-bold text-gray-800">sign in </Link>   
          </p>
          <Button
            primary
            onClick={handleClick}
          >
            Create Account
          </Button>
        </div>
      </div> 
    </div>
  );
}

export default HomePage;
