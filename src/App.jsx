import Gallery from "./components/Gallery/Gallery";
import SearchForm from "./components/SearchForm/SearchForm";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
