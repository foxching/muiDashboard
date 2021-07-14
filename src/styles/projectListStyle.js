import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    section: {
        margin: theme.spacing(2, 0)
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