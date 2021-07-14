import { blue, blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    list: {
        minWidth: "300px",
        maxWidth: "350px"
    },

    navAvatar: {
        width: "35px",
        height: "35px"
    },
    uiAvatar: {
        backgroundColor: blue['A200'],
        color: "white"
    },
    //side nav
    drawerPaper: {
        width: "250px",
        marginTop: "65px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "0px"
        }
    },
    //main
    wrapper: {
        height: "100%",
        minHeight: "900px",
        background: "#efefef",
        marginBottom: "10px",
        padding: theme.spacing(2, 2, 0, 34),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 2)
        }
    },
    navLinks: {
        color: blueGrey['A400'],
        "& :hover, &:hover div": {
            color: blue['A400']
        },
        '& div': {
            color: blueGrey['A400']
        }
    },
    nestedLink: {
        paddingLeft: theme.spacing(4),
    },
    activeNavLinks: {
        color: blue['A700'],
        '& div': {
            color: blue['A700']
        }
    },
    navButton: {
        width: '100%',
        textTransform: "capitalize"
    }

}));
