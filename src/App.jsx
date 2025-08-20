
import { TralerDesign } from './components/Traler'
import TrailerGet from './components/Traler/tralerGet'
import Layout from './layouts/Layout';
// import HomePage from './pages/HomePage';  // misol uchun

function App() {
  return (
    <Layout>
      {/* <HomePage /> */}
      <TrailerGet/>
      <TralerDesign/>
      {/* Boshqa pagelaram shunaqa davom etad... */}
    </Layout>
  );
}

export default App;
