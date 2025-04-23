import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import NoPage from "./components/NoPage";
import TestComponent from "./components/TestComponent";
import DefaultLayout from "./layout/DefaultLayout";
import ErrorLayout from "./layout/ErrorLayout";

function App() {
  return (
    <>
      {/* <TestComponent title="TEST">
        <h1>HEADING</h1>
        CHILDREN HTML TAG
      </TestComponent> */}

      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>

        <Route path="*" element={<ErrorLayout />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
