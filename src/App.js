import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/Movie/Create";
import NowPlaying from "./pages/Movie/NowPlaying";
import PopularMovie from "./pages/Movie/Popular";
import TopRatedMovie from "./pages/Movie/TopRated";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<PopularMovie />}></Route>
          <Route path="/movie/now" element={<NowPlaying />}></Route>
          <Route path="/movie/top" element={<TopRatedMovie />}></Route>
        </Routes>
      </Layout>
     
    </div>
  );
}



export default App;
