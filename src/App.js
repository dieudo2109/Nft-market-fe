import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Detail from "./component/Detail";
import DetailAuthor from "./page/DetailAuthor";
import BlogDetail from "./component/Blog/BlogDetail";
import Market from "./page/Market";
import BlogPage from "./page/BlogPage";
import Contact from "./page/Contact";
import Create from "./page/Create";
function App() {
  // const [isLoading, setisLoading] = useState(true);
  // const handleDataLoaded = () => {
  //   setisLoading(false);
  // };
  return (
    // <div>
    //   {isLoading ? (
    //     <div className="spinner-wrapper">
    //       <ClipLoader color="#36D7B7" />
    //     </div>
    //   ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailnft/:id" element={<Detail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/author/:id" element={<DetailAuthor />} />
        <Route path="/market" element={<Market />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </>
    //   )}
    // </div>
  );
}

export default App;
