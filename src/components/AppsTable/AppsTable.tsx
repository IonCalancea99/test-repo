import {
    Box,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow, Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import type {Application} from "../../services/types.ts";
import ErrorOutline from "@mui/icons-material/ErrorOutline";

interface AppsTableProps {
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: 25 | 50) => void;
    data: Application[];
    totalCount: number;
    isLoading: boolean;
    error: boolean;
}

export const AppsTable = ({onPageChange, onPageSizeChange, data, totalCount, isLoading, error}: AppsTableProps) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState<25 | 50>(25);

    useEffect(() => {
        onPageChange(page);
        onPageSizeChange(rowsPerPage);
    }, [page, rowsPerPage, onPageChange, onPageSizeChange]);

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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", gap: 2, width: '100%' }}>
                <CircularProgress size={24} color={"info"}/>
                <span>Loading data...</span>
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                gap={2}
                width={"100%"}
            >
                <ErrorOutline color="error" sx={{ fontSize: 64 }} />
                <Typography variant="h5" color="error">
                    Oops! Something went wrong.
                </Typography>
                <Typography color="text.secondary">
                    Please try again later or contact support.
                </Typography>
            </Box>
        );
    }

    return (
        <Paper sx={{ minWidth: "900px", width: '100%', overflow: 'hidden', bgcolor: "secondary.main", padding: 1 }}>
            <TableContainer sx={{ overflowY: "hidden" }}>
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
                        '& td': { borderBottom: 'none' }
                    }}>
                        {data
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
                count={totalCount ?? 0}
                page={page}
                rowsPerPageOptions={[25, 50]}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPage={rowsPerPage}
            />
        </Paper>
    );
}