import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  bloomFilterBox: {
    width: '10px',
    height: '10px',
    marginRight: '2px',
    marginBottom: '2px',
    backgroundColor: theme.palette.grey['300'],
    transition: "background-color 200ms ease"
  },

  bloomFilterBoxOn: {
    '&.primary': {
      backgroundColor: theme.palette.primary.light
    },
    '&.secondary': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));

export const theme = createMuiTheme();
