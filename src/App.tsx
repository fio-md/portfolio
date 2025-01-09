import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-mono text-base bg-zinc-0 text-zinc-800 dark:bg-zinc-800 dark:text-orange-50 overflow-hidden min-w-screen-md max-w-screen-xlg md:py-2">
      <Header />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
