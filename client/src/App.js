import React from "react";
import axios from "axios";

function App() {
  const [fetchedData, setFetchedData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:5000/query-data", {});
      setFetchedData(data);
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
