import logo from "./logo.svg";
import "./App.css";
import TableElement from "./components/TableElement/table-element";
import RatingTable from "./components/RatingTable/rating-table";
import { useEffect, useState, useRef } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState(50); // Количество загруженных пользователей
  const containerRef = useRef(null);

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

    // Генерация пользователей и установка первых 50 в состояние
    const generatedUsers = [];
    for (let i = 0; i < loadedUsers; i++) {
      generatedUsers.push(generateRandomUser());
    }
    setUsers(generatedUsers);

    // Обработчик события скролла для ленивой загрузки
    function handleScroll() {
      if (!containerRef.current) return; // Проверяем, что containerRef.current существует
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setLoadedUsers((prevLoadedUsers) => prevLoadedUsers + 50);
      }
    }

    if (containerRef.current) {
      // Проверяем, что containerRef.current существует перед добавлением слушателя
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        // Удаляем слушатель при размонтировании компонента
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loadedUsers]);

  return (
    <div className="App">
      <RatingTable users={users} containerRef={containerRef} />
    </div>
  );
}

export default App;
