import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    pageTitle: {
        color: blueGrey[800],
        marginBottom: theme.spacing(2),
        textTransform: 'capitalize'
    },
    pageSubtitle: {
        color: blueGrey[500],
        margin: theme.spacing(1, 0),
        textTransform: "uppercase"
    },
    cardLabel: {
        color: blueGrey[500],
        textTransform: 'uppercase',
        margin: theme.spacing(1, 0),
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            fontSize: "0.8rem"
        }
    },
    cardTitle: {
        color: blueGrey[800],
        textTransform: 'capitalize',
        margin: theme.spacing(1, 0),
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.8rem"
        }
    },
    radioBtn: {
        fontSize: "1rem",
        fontWeight: "bold",
    },
    cardContent: {
        position: 'relative'
    },
    cardGraph: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100% !important",
        height: "45% !important"
    }
}));