import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  bloomFilterBox: {
    width: '10px',
    height: '10px',
    marginRight: '2px',
    marginBottom: '2px',
    backgroundColor: '#dedede',
    transition: "background-color 200ms ease"
  },

  bloomFilterBoxOn: {
    backgroundColor: 'blue'
  }
});
