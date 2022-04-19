import { useState } from "react";
import RenderCheckBox from "./components/RenderCheckBox";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <RenderCheckBox></RenderCheckBox>
        </div>
    );
}

export default App;
