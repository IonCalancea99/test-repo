import {
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import {useGetAppsQuery} from "../../services/api.ts";
import {useEffect, useRef, useState} from "react";
import type {Application} from "../../services/types.ts";

export const AppsTable = () => {
    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState<25 | 50>(25);

    const {data, isLoading, isSuccess, error, refetch} = useGetAppsQuery({pageSize: rowsPerPage, pageNumber: page});
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

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10) as 25 | 50);
        setPage(0);
    };

    if (isLoading) {
        return (
            <Stack flexDirection={"row"} alignItems={"center"} height={"100vh"} width={"100%"}>
                Loading...
            </Stack>
        );
    }

    if (error) {
        return (
            <Stack flexDirection={"row"} alignItems={"center"} height={"100vh"} width={"100%"}>
                Error loading data
            </Stack>
        );
    }

    return (
        <Paper sx={{ minWidth: "800px", width: '100%', overflow: 'hidden', bgcolor: "secondary.main"}}>
            <TableContainer sx={{ height: "70%", width: "800px" }}>
                <Table stickyHeader>
                    <TableHead sx={{
                        "& .MuiTableCell-root": {bgcolor: "#434735", color: "#e7e7e5"}
                    }}>
                        <TableRow sx={{bgcolor: "#434735"}}>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Connection</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{
                        "& .MuiTableCell-root": {color: "#dbdbdb"},
                    }}>
                        {data
                            ?.appRows
                            .map((row: Application) => (
                                <TableRow key={row.appName} hover>
                                    <TableCell>{row.appName}</TableCell>
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.appId}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={data?.totalCount ?? 0}
                page={page}
                rowsPerPageOptions={[25, 50]}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPage={rowsPerPage}
            />
        </Paper>
    );
}