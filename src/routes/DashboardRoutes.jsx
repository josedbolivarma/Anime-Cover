import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home";
import { Header } from "../components/Header/Header";
import { AnimeScreen } from "../pages";

export const DashboardRoutes = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/:id" element={ <AnimeScreen /> } />
        </Routes>
    </>
  )
}
