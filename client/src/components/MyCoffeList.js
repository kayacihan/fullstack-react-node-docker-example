import Grid from '@material-ui/core/Grid';

function MyCoffeList({ data }) {
    return <>
        <Grid container spacing={3} >
            <div style={{ margin: '20px' }}>
                {data.map((row) => {
                    return (
                        <Grid key={row._id} item xs={12} sm={12}
                            style={{ marginLeft: '15px' }} >
                            <h2>{row.title}</h2>
                            <p>{row.description}</p>
                            <p>Ingredients: {row.ingredients.map(
                                (n, i) => (<span key={i}>{i > 0 ? "," : ""} {n}</span>))}
                            </p>
                        </Grid>)
                }
                )
                }
            </div>
        </Grid>

    </>
}

export default MyCoffeList;
