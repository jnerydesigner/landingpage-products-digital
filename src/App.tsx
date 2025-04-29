import CardsSection from "./components/cardSection";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
  return (
    <div className="min-h-screen md:grid md:grid-rows-[100px,1fr,50px] bg-gray-100">
      <Header />
      <main className="flex justify-center items-center p-6">
        <CardsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
