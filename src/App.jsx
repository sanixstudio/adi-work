import { Layout } from "./layout";
import { About, Contact, Hero, Services, Work } from "./containers";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
