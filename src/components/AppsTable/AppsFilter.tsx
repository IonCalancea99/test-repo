import {Box, Stack, TextField, Typography} from "@mui/material"
import {useEffect, useState} from "react";

interface AppsFilterProps {
    onNameChange: (name: string) => void;
    onCategoryChange: (category: string) => void;
}

export const AppsFilter = ({onCategoryChange, onNameChange}: AppsFilterProps) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        onNameChange(name);
    }, [name, onNameChange]);


    useEffect(() => {
        onCategoryChange(category);
    }, [category, onCategoryChange]);

    useEffect(() => {

    }, [name, category]);
    return (
        <Stack width={"300px"} spacing={2} bgcolor={"secondary.main"} padding={1}
        >
            <Box padding={1} bgcolor={"#434735"}>
                <Typography variant="h6" color="#e7e7e5"> Filters </Typography>
            </Box>
            <TextField
                slotProps={{
                    input: {
                        sx: {
                            "&::placeholder": {
                                color: "red",
                            },
                            color: "#e7e7e5",
                            borderRadius: "4px",
                        },
                    },
                    inputLabel: {
                        sx: {
                            color: "#e7e7e5",
                        },
                    },
                }}
                label="Name filter"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                slotProps={{
                    input: {
                        sx: {
                            "&::placeholder": {
                                color: "red",
                            },
                            color: "#cfcfcf",
                            borderRadius: "4px",
                        },
                    },
                    inputLabel: {
                        sx: {
                            color: "#cfcfcf",
                        },
                    },
                }}
                label="Category filter"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
        </Stack>
    )
}