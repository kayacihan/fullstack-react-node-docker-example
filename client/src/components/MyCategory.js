import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

function MyCategory({ allData, setData }) {
    return <>
        <Grid container spacing={1} >
            <Grid item xs={12} sm={12} >
                <Link onClick={() => { setData(allData) }} >All Coffees</Link>
            </Grid>
            <Grid item xs={12} sm={12} >
                <Link onClick={() => {
                    setData(allData.filter((d) => d.category === "hot"))
                }}
                > Hot</Link>
            </Grid>
            <Grid item xs={12} sm={12} >
                <Link onClick={() => {
                    setData(allData.filter((d) => d.category === "iced"))
                }}
                >Iced</Link>
            </Grid>
        </Grid>
    </>
}

export default MyCategory;
