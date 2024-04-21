import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  const [currentId, setcurrentId] = useState(null);
  
  return (
    <>
      <main className=" h-fit ">
        <Navbar />
        <div className="flex lg:flex-row flex-col justify-between h-full px-10 py-[40px]  ">
          <Todos setcurrentId={setcurrentId}/>
          <Form currentId={currentId} setcurrentId={setcurrentId}/>
        </div>
      </main>
    </>
  );
}

export default App;
