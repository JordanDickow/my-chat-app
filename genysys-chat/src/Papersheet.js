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
import {CTX} from './Store'

const useStyles = makeStyles(theme => ({
  root: {
      margin: '50px',
    padding: theme.spacing(3, 2),
  },
flex: {
    display: 'flex',
},
contactWindow: {
    width: '100%',
    height: '300px',
    borderRight: '5px solid black'

},

chatWindow: {
    width: '100%',
    height: '200px',

},

chatBox: {
    width: '100%',
    height: '10px',
    marginTop: '150px',
    marginRight: '300px'

},

button: {
    width: '100%',
    marginTop: '300px',
    marginRight: '1000px'

}


}));

export default  function Papersheet() {
    const classes = useStyles()
    //  CTX store
const [allChats] = React.useContext(CTX)

 const  topics = Object.keys(allChats)
 // Local state
 const [activeTopic, changeActiveTopic] = React.useState(topics[0])

    const [textValue, changeTextValue] = React.useState('')

    return(
        <div>
        <Paper className={classes.root}>
            <Typography variant="h4" component="h4">
                Chat App
                </Typography>
                <Typography variant="h5" component="h5">
                {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.contactWindow}>
                    <List>
                    {
                        topics.map(topic => (
                            <ListItem onClick={(e)=> changeActiveTopic(e.target.innerText)} key={topic} button>
                                <ListItemText primary={topic} />
                                </ListItem>


                        ))
                    }
                    </List>
                    </div>
                    <div className={classes.chatWindow}>
                    {
                        allChats[activeTopic].map((chat,i) => (
                            <div className={classes.flex} key={i}>
                                 <Chip label={chat.from} className={classes.chip} />
                                 <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
                            </div>

                        ))
                    }
                    </div>
                        <div className={classes.chatBox}>
                        <TextField
                        id="standard-name"
                        label="Send a chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={ e => changeTextValue(e.target.value)}

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
