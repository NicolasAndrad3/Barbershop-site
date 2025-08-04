import Hero from "../src/components/Hero";
import WhyEstilo from "../src/components/WhyEstilo"; 
import Calendar from '../src/components/Calendar';

function App() {
  return (
    <main className="w-full h-full scroll-smooth bg-black text-white">
      <Hero />
      <WhyEstilo />
      <Calendar />
    </main>
  );
}

export default App;
