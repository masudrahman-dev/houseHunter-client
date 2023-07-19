import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import axios from "axios";

const Home = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://house-hunter-server-flax.vercel.app/api/houses/addNewHouse"
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {houses?.map((house) => (
          <Card key={house._id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Home;
