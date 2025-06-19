import {Stack} from "@mui/material";
import {AppsTable} from "../components/AppsTable/AppsTable.tsx";
import {AppsFilter} from "../components/AppsTable/AppsFilter.tsx";

export const AppDiscovery = () => {
  return (
      <Stack flexDirection={"row"} height={"100%"} spacing={2} padding={2} sx={{ width: "calc(100% - 240px)" }} bgcolor={"primary.main"}>
          <AppsTable></AppsTable>
          <AppsFilter></AppsFilter>
      </Stack>
  );
}