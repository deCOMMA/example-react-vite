import { AppRouter } from "./providers/router";

import "./styles/index.css";
import { Navbar } from "@/widgets/Navbar";

function App() {

  console.log("sdfd");

  return (
    <div className="app dark">
      <Navbar />
      <AppRouter></AppRouter>
    </div>
  )
}

export default App
