import React, { useState, useEffect } from "react";
import "./App.css";
import RatingTable from "./components/RatingTable/rating-table";

function App() {
  const [users, setUsers] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function generateRandomUser() {
      const randomColor = Math.floor(Math.random() * 3);
      const randomName = "User" + Math.floor(Math.random() * 10000);
      const randomSpeed = Math.floor(Math.random() * 20);
      const randomTime = Math.floor(Math.random() * 5000);

      const minutes = Math.floor(randomTime / 60000);
      const seconds = Math.floor((randomTime % 60000) / 1000);
      const milliseconds = randomTime % 1000;

      const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;

      return {
        color: randomColor,
        name: randomName,
        speed: randomSpeed,
        time: formattedTime,
      };
    }

    const generatedUsers = [];
    for (let i = 0; i < 1000; i++) {
      generatedUsers.push(generateRandomUser());
    }
    setUsers(generatedUsers);
    setLoadedUsers(generatedUsers.slice(0, 50));
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLoading(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loading) {
      const currentLength = loadedUsers.length;
      const newUsers = users.slice(currentLength, currentLength + 50);
      setLoadedUsers((prevUsers) => [...prevUsers, ...newUsers]);
      setLoading(false);
    }
  }, [loading, loadedUsers, users]);

  return (
    <div className="App">
      <RatingTable users={loadedUsers} />
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default App;
