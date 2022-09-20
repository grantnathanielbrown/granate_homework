import SearchContainer from "./components/SearchContainer";

export default function App() {

  return (
    <div className="App min-h-screen w-full flex flex-col justify-center items-center text-2xl bg-gradient-to-r from-red-700 to-red-200">
      
      <h1 className="text-6xl m-4">Where are we going to eat?</h1>
      <SearchContainer />
    </div>
  );
}


