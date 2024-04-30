import Navbar from "./components/Navbar";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import NewPopular from "./pages/NewPopular";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import BrowseLanguage from "./pages/BrowseLanguage";

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
        <Route path="sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
