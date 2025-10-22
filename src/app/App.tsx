import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme/useTheme";
import "./styles/index.css";
import { Navbar } from "@/widgets/Navbar";
import clsx from "clsx";


function App() {

  const { theme } = useTheme()
  const classNames = clsx("app", theme);

  return (
    <div className={classNames}>
      <Navbar />
      <AppRouter></AppRouter>
    </div>
  )
}

export default App
