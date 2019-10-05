import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
      margin: '50px',
    padding: theme.spacing(3, 2),
  },
flex: {
    display: 'flex',



},
topicWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'

},

chatWindow: {
    width: '70%'
},

chatBox: {
    width: '85%'
},

button: {
    width: '15%'

}


}));

export default  function Papersheet() {
    const classes = useStyles()

    return(
        <div>
        <Paper className={classes.root}>
            <Typography variant="h4" component="h4">
                Chat App
                </Typography>
                <Typography variant="h5" component="h5">
                Topic
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicWindow}>
                    </div>

                </div>
     </Paper>
</div>

    )
}
