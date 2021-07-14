import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
    },
    listWrapper: {
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(1),
        }
    },
    cardImage: {
        maxHeight: '150px',
        overflow: 'hidden'
    },
    responsiveImage: {
        width: "100%",
        height: "auto"
    }
}));