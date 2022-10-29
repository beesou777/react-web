import Contact from './component/Contact';
import './App.css';
import Banner from './component/Banner';
import Feature from './component/Feature';
import Navi from './component/Navi';
import Quality from './component/Quality';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
   <>
   <Navi/>
   <Banner/>
   <Feature/>
   {/* <Quality/> */}
   <Contact/>
   </>
  );
}

export default App;
