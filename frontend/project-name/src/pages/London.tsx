import CitiesList from '../components/CitiesList.tsx';
import MyList from '../components/myList.tsx';

function London() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 justify-between items-center">
      <div className="flex flex-col-3 gap-6">
        <CitiesList />
        <div  className="border rounded shadow p-4">
          <MyList />
        </div>

      </div>
    </div>
  );
}

export default London;