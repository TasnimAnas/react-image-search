import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "../../context/GlobalContext";
import "./ThemeToggle.css";
const ThemeToggle = () => {
  const { isDark, toggleTheme } = useGlobalContext();
  return (
    <section className="toggleContainer">
      <button className="themeButton" onClick={toggleTheme}>
        {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  );
};
export default ThemeToggle;
