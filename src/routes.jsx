import DashboardMainLayouts from "./components/layouts/dashboard/DashboardMainLayouts";
import Dashboard from "./pages/sub-pages/Dashboard";
import BlankPages from "./pages/sub-pages/BlankDashboard";
import Calendar from "./pages/sub-pages/CalendarDashboard";
import Form from "./pages/sub-pages/FormDasboard";
import Table from "./pages/sub-pages/TablesDashboard";
import Tabs from "./pages/sub-pages/TabsDashboard";

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayouts />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blankpages" element={<BlankPages />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="form" element={<Form />} />
            <Route path="table" element={<Table />} />
            <Route path="tabs" element={<Tabs />} />
        </Route>
    )
);
