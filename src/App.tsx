import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { paths } from "./constants/paths";
import MetaTags from "./components/MetaTags";
import SchemaManager from "./components/SchemaManager";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Bulk from "./pages/Bulk";
import Material from "./pages/Material";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProductLayerOne from "./pages/ProductLayerOne";
import ProductLayerTwo from "./pages/ProductLayerTwo";
import ProductLayerThree from "./pages/ProductLayerThree";
import ProductLayerFour from "./pages/ProductLayerFour";
import NotFound from "./pages/NotFound";
import ProductLayerFive from "./pages/ProductLayerFive";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-white">
        <MetaTags />
        <SchemaManager />
        <Routes>
          <Route path={paths?.home} element={<Home />} />
          <Route
            path={paths?.homeRedirect}
            element={<Navigate to={paths?.home} replace />}
          />
          <Route path={paths?.bulk} element={<Bulk />} />
          <Route path={paths?.material} element={<Material />} />
          <Route path={paths?.about} element={<About />} />
          <Route path={paths?.services} element={<Services />} />
          <Route
            path={paths?.bulkProductLayerOne}
            element={<ProductLayerOne isBulk />}
          />
          <Route
            path={paths?.bulkProductLayerTwo}
            element={<ProductLayerTwo isBulk />}
          />
          <Route
            path={paths?.bulkProductLayerThree}
            element={<ProductLayerThree isBulk />}
          />
          <Route
            path={paths?.bulkProductLayerFour}
            element={<ProductLayerFour isBulk />}
          />
          <Route
            path={paths?.bulkProductLayerFive}
            element={<ProductLayerFive isBulk />}
          />
          <Route
            path={paths?.materialProductLayerOne}
            element={<ProductLayerOne />}
          />
          <Route
            path={paths?.materialProductLayerTwo}
            element={<ProductLayerTwo />}
          />
          <Route
            path={paths?.materialProductLayerThree}
            element={<ProductLayerThree />}
          />
          <Route
            path={paths?.materialProductLayerFour}
            element={<ProductLayerFour />}
          />
          <Route
            path={paths?.materialProductLayerFive}
            element={<ProductLayerFive />}
          />
          <Route path={paths?.blog} element={<Blog />} />
          <Route path={paths?.blogPost} element={<BlogPost />} />
          <Route path={paths?.contact} element={<Contact />} />
          <Route path={paths?.notFound} element={<NotFound />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
