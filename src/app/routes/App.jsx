import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import '../styles/App.scss';
import "../styles/style.scss";
import { Header } from '../../widgets/header/Header';
import { useEffect } from 'react';
import { About, Admin, Home, Gallerys, News, Project, NewsDeteils,A404 } from '../../pages';
import { Footer } from '../../widgets/footer/Footer';
import { Ads, ProjectDeteill, Scroll } from '../../widgets';


const routesArr = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/news', element: <News /> },
  { path: '/administration', element: <Admin /> },
  { path: '/project', element: <Project /> },
  { path: '/gallery', element: <Gallerys /> },
  {
    path: "/news-detail/:id",
    element: <NewsDeteils />,
  },
  {
    path: "/project-detail/:id",
    element: <ProjectDeteill />,
  },
  {
    path: "/ads-detail/:id",
    element: <Ads />,
  },
  {
    path: "*",
    element: <A404 />,
  },

];

const App = () => {
  const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, [pathname]);
    return children;
  };
  return (
    <ScrollToTop>
      <Header />
      <Scroll />

      <Routes>
        {routesArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </ScrollToTop>
  )
}

export default App