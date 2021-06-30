import React from 'react';
import {Box, IconButton, makeStyles, TextField, Typography} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialogs from "./Dialogs";

const useStyle = makeStyles(theme => ({
    root: {
        height: "100vh",
        maxWidth: "319px",
        width: "100%",
        borderRight: "1px solid #F7F7F7"
    },
    headerBox: {
        maxHeight: "60px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "21px 17px",
        borderBottom: "1px solid #F7F7F7"
    },
    headerBoxText: {
        display: "flex",
        alignItems: "center",
        opacity: 0.65,
        fontSize: "14px"
    },
    textField: {
        margin: "22px 0 27px",
        padding: "0 17px",
        display: "flex"
    },
    peopleIcon: {
        marginRight: "7px"
    },
    iconButton: {
        padding: 0
    }
}))

const Sidebar = () => {
    const classes = useStyle()

    return (
        <Box className={classes.root}>
            <Box className={classes.headerBox}>
                <Typography
                    className={classes.headerBoxText}
                >
                    <PeopleIcon className={classes.peopleIcon}/>
                    Список диалогов
                </Typography>
                <IconButton className={classes.iconButton}>
                    <EditIcon/>
                </IconButton>
            </Box>
            <TextField
                className={classes.textField}
                InputProps={{
                    startAdornment:
                        <InputAdornment
                            position="start"
                        >
                            <SearchIcon/>
                        </InputAdornment>,
                }}
                placeholder={"Поиск среди контактов"}
            />
            <Dialogs/>
        </Box>
    );
};

export default Sidebar;