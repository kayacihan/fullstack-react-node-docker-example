import TextField from '@material-ui/core/TextField'

function MyLongTextbox(props) {
    return <TextField
        autoFocus
        value={props.search}
        onChange={props.handleChange}
        variant="outlined"
        color="primary"
        label="Search"
        placeholder="Search"
    />
}


export default MyLongTextbox;
