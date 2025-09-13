import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function LoginPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 justify-center items-center">
      <div className="w-96 bg-gray-100 rounded-2xl shadow-xl p-8 border border-gray-100">
        <form className="space-y-4">
          <h1 className="font-bold">Sign in</h1>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input 
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input 
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border"
            />
          </div>

          <Button
            primary
            onClick={handleClick}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
