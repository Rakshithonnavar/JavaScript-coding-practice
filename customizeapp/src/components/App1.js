import child from "./child"
import "./App1.css";

function App1()
{
    const date = new Date()
    return (
      <div>
        <child message={date.toLocaleTimeString} />
      </div>
    );
}

export default App1;
