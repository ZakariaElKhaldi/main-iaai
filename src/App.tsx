import { Hero } from './sections/hero';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
};

export default App;
