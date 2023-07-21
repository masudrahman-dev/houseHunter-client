import { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";
import { GlobalContext } from "../../context/globalContext/GlobalProvider";

const Home = () => {
  const [houses, setHouses] = useState([]);
  const { isFilterBarOpen, setIsFilterBarOpen } = useContext(GlobalContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/houses`
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border">
      <button  onClick={() => setIsFilterBarOpen(!isFilterBarOpen)} className="my-3 border p-3 uppercase rounded-lg">Filter</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {houses?.map((house) => (
          <Card key={house._id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Home;
