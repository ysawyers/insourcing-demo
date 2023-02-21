import React from "react";
import axios from "axios";

function App() {
  // const [fetchedData, setFetchedData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/data/add", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Testing Dummy Monolith</h1>
    </div>
  );
}

export default App;
