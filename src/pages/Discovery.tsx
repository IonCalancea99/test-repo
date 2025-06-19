import {Stack} from "@mui/material";
import {AppsTable} from "../components/AppsTable/AppsTable.tsx";
import {AppsFilter} from "../components/AppsTable/AppsFilter.tsx";
import {useEffect, useRef, useState} from "react";
import {useGetAppsQuery} from "../services/api.ts";

export const AppDiscovery = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState<25 | 50>(25);
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");

    const {data, isLoading, isSuccess, error, refetch} = useGetAppsQuery({
        pageSize: rowsPerPage,
        pageNumber: page,
        appName: name,
        category: category,
    });
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timeoutRef.current && isSuccess) {
            clearTimeout(timeoutRef.current);
        }

    }, [isSuccess]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => refetch(), 500)
    }, [error, refetch]);

    useEffect(() => {
        refetch();
    }, [page, rowsPerPage, refetch]);

  return (
      <Stack flexDirection={"row"}
             spacing={2}
             padding={2}
             bgcolor={"primary.main"}
             gap={1}
      >
          <AppsTable
              onPageChange={setPage}
              onPageSizeChange={setRowsPerPage}
              isLoading={isLoading}
              error={!!error}
              data={data?.appRows ?? []}
              totalCount={data?.totalCount ?? 0}
          ></AppsTable>
          <AppsFilter onCategoryChange={setCategory} onNameChange={setName}></AppsFilter>
      </Stack>
  );
}