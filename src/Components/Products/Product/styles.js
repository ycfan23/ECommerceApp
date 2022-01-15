import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
  root: {
    maxWidth: '100%'
  },
  media: {
    paddingTop: '100%',
    height: '100%',
    width: '100%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}))