import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
      margin: '50px',
    padding: theme.spacing(3, 2),
  },
flex: {
    display: 'flex',




},
contactWindow: {
    width: '25%',
    height: '300px',
    borderRight: '1px solid black'

},

chatWindow: {
    width: '100%',
    padding: '20px'
},

chatBox: {
    width: '100%'

},

button: {
    width: '5%',
    marginTop: '310px'

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
                Contacts
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.contactWindow}>
                    <List>
                    {
                        ['contact'].map(contact => (
                            <ListItem key={contact} button>
                                <ListItemText primary={contact} />
                            </ListItem>

                        ))
                    }

                    </List>
                    </div>
                    <div className={classes.chatWindow}>
                    {
                        [{from: 'user', msg: 'hello'}].map((chat,i) => (
                            <div className={classes.flex} key={i}>
                                 <Chip label={chat.from} className={classes.chip} />
                                 <Typography variant='p'>{chat.msg}</Typography>
                            </div>

                        ))
                    }
                    </div>
                        <div className={classes.chatBox}>
                        <TextField
                        id="standard-name"
                        label="Send a chat"
                        className={classes.chatBox}
                        // value={values.name}
                        // onChange={handleChange('name')}

                        />
                        </div>
                            <div className={classes.Button}>
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Send
                                </Button>
                            </div>

                </div>
     </Paper>
</div>

    )
}
