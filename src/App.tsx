import { useState } from "react";
import RenderCheckBox from "./components/RenderCheckBox";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>都道府県</h1>
            <RenderCheckBox></RenderCheckBox>
        </div>
    );
}

export default App;
