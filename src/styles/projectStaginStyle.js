import { makeStyles } from '@material-ui/core/styles';
import { blueGrey, blue } from '@material-ui/core/colors';


export const useStyles = makeStyles((theme) => ({
    rightWrapper: {
        marginTop: "-60px",
        marginLeft: "-20px",
        marginBottom: "-3px",
        marginRight: "-8px",
        padding: theme.spacing(8, 5, 5, 4),
        overflow: "hidden",
        overflowY: "scroll",
        height: "550px",
        borderRadius: '0',
        border: "none",
        position: "sticky",
        top: 0
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
    nestedLink: {
        paddingLeft: theme.spacing(4),
    },
    activeNavLinks: {
        color: blue[500],
        '& div': {
            color: blue[500]
        }
    },
    navButton: {
        width: '100%',
        textTransform: "capitalize"
    },

}));
