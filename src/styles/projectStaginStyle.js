import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, blue } from '@material-ui/core/colors';


export const useStyles = makeStyles((theme) => ({
    rightWrapper: {
        marginTop: "-20px",
        marginLeft: "-20px",
        marginBottom: "-3px",
        marginRight: "-8px",
        padding: "30px",
        overflow: "auto",
        minHeight: "1000px",
        height: "auto",
        borderRadius: '0',
        border: "none"
    },
    accordion: {
        width: "100%",
        boxShadow: "none"
    },
    navlinks: {
        color: blueGrey['A400'],
        "& :hover, &:hover div": {
            color: blue['A400']
        },
        '& div': {
            color: blueGrey['A400']
        },
    },
    navButton: {
        width: '100%',
        textTransform: "capitalize"
    }


}));
