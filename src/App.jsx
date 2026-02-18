import CertificateSection from "./components/Certificates/Certificate";
import ContactCard from "./components/Contact/Contact";
import EducationJourney from "./components/Educations/Education";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App(){
  return(
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <CertificateSection/>
    <EducationJourney/>
    <ContactCard/>
    </>
  )
}

export default App;