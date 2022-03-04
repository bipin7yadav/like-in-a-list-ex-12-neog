import "./styles.css";
import { useState } from "react";

export default function App() {
  const fun = (a) => {
    const [count, setCount] = useState(0);
    return (
      <li>
        {a} : <button onClick={() => setCount(count + 1)}>like {count}</button>
      </li>
    );
  };

  const namesList = [
    { name: "Bipin" },
    { name: "Ankit" },
    { name: "Kapil" },
    { name: "Ansh" }
  ];
  return (
    <div className="App">
      {namesList.map((a) => {
        return fun(a.name);
        // const [count,setCount]= useState(0);
        // return <li>{a.name}<button  onClick={()=>setCount(count +1)}>like {count}</button></li>
      })}
    </div>
  );
}
