import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = format(time, "EEEE, MMMM do yyyy");
  const formattedTime = format(time, "HH:mm:ss");

  const seconds = time.getSeconds();
  const bgColor = `hsl(${seconds * 6}, 70%, 50%)`;

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="clock">
        <h1>{formattedTime}</h1>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}

export default App;