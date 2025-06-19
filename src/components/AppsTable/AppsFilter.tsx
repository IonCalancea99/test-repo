import {Stack, TextField, Typography} from "@mui/material"
import {useEffect, useState} from "react";

export const AppsFilter = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {

    }, [name, category]);
    return (
        <Stack width={"300px"} height={"100%"} spacing={2} bgcolor={"secondary.main"} padding={1}
        >
            <Typography variant="h6" color="#e7e7e5"> Filters </Typography>
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