import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    pageTitle: {
        color: blueGrey[800],
        marginBottom: theme.spacing(3),
        textTransform: 'capitalize'
    },
    pageSubtitle: {
        color: blueGrey[500],
        textTransform: "uppercase"
    },

}));
