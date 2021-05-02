import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MyLongTextbox from './components/Textbox'
import MyCategory from './components/MyCategory'
import MyCoffeList from './components/MyCoffeList'


function App() {

  const [searchText, setSeachText] = useState(''); // to be used coffee search
  const [data, setData] = useState("");
  const allData = null

  useEffect(() => {
    setData(
      searchText.length === 0
        ? allData
        : allData.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.category.toLowerCase().includes(searchText.toLowerCase()) ||
          item.description.toLowerCase().includes(searchText.toLowerCase()) ||
          item.ingredients.toLowerCase().includes(searchText.toLowerCase())
        )
    );
  }, [setData, searchText]);

  function handleChange(e) {
    setSeachText(e.target.value);
  }

  return (
    <div>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={3} >
          <div style={{ margin: '42px 15px ' }}>
            <MyLongTextbox search={searchText} handleChange={handleChange} />
          </div>
          <div style={{ margin: '42px 30px ' }}>
            <MyCategory
              allData={(searchText.length === 0) ? allData : data}
              setData={setData} />
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MyCoffeList data={data} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
