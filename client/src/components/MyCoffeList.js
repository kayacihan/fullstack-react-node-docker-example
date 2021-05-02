import Grid from '@material-ui/core/Grid';

function MyCoffeList({ data }) {
    return <>
        <Grid container spacing={3} >
            <div style={{ margin: '42px 15px ' }}>
                <Grid item xs={12} sm={12} >
                    <h2>coffee1</h2>
                    <p>coffee1 coffee1 coffee1 coffee1 coffee1 coffee1 coffee1 coffee1 </p>
                    <p>Ingredients:{ }</p>
                </Grid>
                <Grid item xs={12} sm={12} >
                    <h2>coffee2</h2>
                    <p>coffee2 coffee2 coffee2coffee2 coffee2 coffee2coffee2 coffee2 coffee2coffee2 coffee2 coffee2coffee2 coffee2 coffee2</p>
                    <p>Ingredients:{ }</p>
                </Grid>
            </div>
        </Grid>

    </>
}

export default MyCoffeList;
