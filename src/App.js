import "./App.css";
import TableElement from "./components/TableElement/table-element";
import RatingTable from "./components/RatingTable/rating-table";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Функция генерации случайного пользователя
    function generateRandomUser() {
      const randomColor = Math.floor(Math.random() * 3);
      const randomName = "User" + Math.floor(Math.random() * 10000);
      const randomSpeed = Math.floor(Math.random() * 20);
      const randomTime = Math.floor(Math.random() * 5000);

      // Форматирование времени в нужный формат
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

    // Генерация пользователей и установка их в состояние
    const generatedUsers = [];
    for (let i = 0; i < 1000; i++) {
      generatedUsers.push(generateRandomUser());
    }
    setUsers(generatedUsers);
  }, []);

  return (
    <div className="App">
      <RatingTable users={users} />
    </div>
  );
}

export default App;
