import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: "-10px",
        background: "#feffee",
        padding: theme.spacing(3, 0, 0, 33),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1, 1),
            marginTop: "-10px",
        }
    }

}));
