import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Youtube from "./components/Youtube";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact";
import EventsPage from "./components/EventsPage";
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={About} path="/about" />
        <Route Component={SinglePost} path="/post/:slug" />
        <Route Component={Post} path="/post" />
        <Route Component={Youtube} path="/youtube" />
        <Route Component={ContactUs} path="/contact" />
        <Route Component={EventsPage} path="/event"/>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
