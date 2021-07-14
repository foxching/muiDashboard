import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    cardImage: {
        maxHeight: '150px',
        overflow: 'hidden'
    },
    responsiveImage: {
        width: "100%",
        height: "auto"
    }
}));