import { useState } from "react";
import Toolbar from "./components/Toolbar";
import Grid from "./components/Grid";
import "./index.css";

export default function App() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(4);
  const [icon, setIcon] = useState("🍷");
  const [grid, setGrid] = useState([]);

  const createGrid = () => {
    const data = Array(rows * cols).fill("");
    data[1] = "X";
    setGrid(data);
  };

  return (
    <div className="app">
      <div className="controls">
        Cao: <input value={rows} onChange={e=>setRows(+e.target.value)} />
        Dài: <input value={cols} onChange={e=>setCols(+e.target.value)} />
        <button onClick={createGrid}>Tạo Lưới</button>
      </div>
      <Toolbar icon={icon} setIcon={setIcon} />
      <Grid grid={grid} setGrid={setGrid} icon={icon} cols={cols} />
    </div>
  );
}