import { BrowserRouter, Route, Routes } from "react-router-dom";
import  HomeScreen from "../pages/HomeScreen";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;