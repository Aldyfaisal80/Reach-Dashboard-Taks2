import DashboardMainLayouts from "./components/layouts/dashboard/DashboardMainLayouts";
import Dashboard from "./pages/sub-pages/Dashboard";
import BlankPages from "./pages/sub-pages/BlankDashboard";
import Calendar from "./pages/sub-pages/CalendarDashboard";
import Form from "./pages/sub-pages/FormDasboard";
import Table from "./pages/sub-pages/TablesDashboard";
import Tabs from "./pages/sub-pages/TabsDashboard";

import TabsContentOne from "./pages/sub-pages/tabs/TabsContentOne";
import TabsContentTwo from "./pages/sub-pages/tabs/TabsContentTwo";
import TabsContentThree from "./pages/sub-pages/tabs/TabsContentThree";
import TabsContentFour from "./pages/sub-pages/tabs/TabsContentFour";

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
            <Route path="tabs" element={<Tabs />}>
                <Route index element={<TabsContentOne />} />
                <Route path="tabs-content-one"  element={<TabsContentOne />} />
                <Route path="tabs-content-two" element={<TabsContentTwo />} />
                <Route path="tabs-content-three" element={<TabsContentThree />} />
                <Route path="tabs-content-four" element={<TabsContentFour />} />
            </Route>
        </Route>
    )
);
