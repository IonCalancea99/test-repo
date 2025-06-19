import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import {Stack} from "@mui/material";

export const AppLayout = () => {
    return (
        <Stack flexDirection={"row"} bgcolor={"primary.main"}>
            <Sidebar/>
            <Stack sx={{ width: "calc(100vw - 240px)"}}>
                <Outlet />
            </Stack>
        </Stack>
    )
}