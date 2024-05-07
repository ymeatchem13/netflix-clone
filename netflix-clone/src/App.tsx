import Navbar from "./components/Navbar";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import NewPopular from "./pages/NewPopular";
import Signin from "./pages/Signin";
import TVShows from "./pages/TVShows";
import BrowseLanguage from "./pages/BrowseLanguage";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="home" element={<Home />} />
        <Route path="tv-shows" element={<TVShows />} />
        <Route path="movies" element={<Movies />} />
        <Route path="new-popular" element={<NewPopular />} />
        <Route path="my-list" element={<MyList />} />
        <Route path="browse-language" element={<BrowseLanguage />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
