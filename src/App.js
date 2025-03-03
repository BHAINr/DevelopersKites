import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './Components/JavaScript/Home';
import Navbar from './Components/JavaScript/Navbar';
import AWSServicesPage from './Components/JavaScript/AWSServicesPage';
import AboutUs from './Components/JavaScript/AboutUs';
import ContactForm from './Components/JavaScript/ContactForm';
import ChatBox from './Components/JavaScript/ChatBox';
 import CloudService from './Components/JavaScript/CloudService';
import NetworkServicesPage from './Components/JavaScript/NetworkServicesPage';
import ITSupportServicesPage from './Components/JavaScript/ITSupport';
import DevelopmentSupportServicesPage from './Components/JavaScript/DevelopmentSupport';
import SecuritySolutionsPage from './Components/JavaScript/SecuritySolutions';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/awsservices" element={<AWSServicesPage/>} />
        <Route path="/networkSolutions" element={<NetworkServicesPage/>} />
        <Route path="/ITSupport" element={<ITSupportServicesPage/>} />
        <Route path="/DevelopmentSupport" element={<DevelopmentSupportServicesPage/>} />
        <Route path="/SecuritySolution" element={<SecuritySolutionsPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/cd" element={<CloudService/>} />
      </Routes>
      <ChatBox/>
    </Router>
   
  );
}

export default App;
