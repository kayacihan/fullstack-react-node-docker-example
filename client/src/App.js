import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MyLongTextbox from './components/Textbox'
import MyCategory from './components/MyCategory'
import MyCoffeList from './components/MyCoffeList'
import { getCoffeeList } from './apis/apis'
import AlertDialog from "./components/AlertDialog";

function App() {

  const [searchText, setSeachText] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  // fetching data from api
  useEffect(() => {
    getCoffeeList(error, setData, setAllData)
  }, []);


  // filtering by text
  useEffect(() => {
    setData(
      searchText.length === 0
        ? allData
        : allData.filter((item) => // search all fields 
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.category.toLowerCase().includes(searchText.toLowerCase()) ||
          item.description.toLowerCase().includes(searchText.toLowerCase()) ||
          item.ingredients.find((s) => s.toLowerCase().includes(searchText.toLowerCase()))
        )
    );
  }, [searchText, allData]);

  // using for textbox
  function handleChange(e) {
    setSeachText(e.target.value);
  }

  //***   error functions*************
  function error(e) {
    setErrorMessage(e);
    setOpenAlert(true);
  }

  function handleCloseAlert() {
    setOpenAlert(false);
  }
  //*** */ error functions*************


  return (
    <div>
      <Grid container spacing={3} justify="center"
        style={{ margin: '20px' }} >
        <Grid item xs={12} sm={3} style={{ border: "1px solid black" }} >
          <div style={{ margin: '20px' }}>
            <MyLongTextbox search={searchText} handleChange={handleChange} />
          </div>
          <div style={{ margin: '20px 35px' }}>
            <MyCategory 
              allData={searchText.length === 0 //if there is search text send filtered data 
                ? allData
                : allData.filter((item) =>
                  item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                  item.category.toLowerCase().includes(searchText.toLowerCase()) ||
                  item.description.toLowerCase().includes(searchText.toLowerCase()) ||
                  item.ingredients.find((s) => s.toLowerCase().includes(searchText.toLowerCase()))
                )
              }
              setData={setData} />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} style={{ border: "1px solid black" }}>
          <MyCoffeList data={data} />
        </Grid>
      </Grid>
      <AlertDialog open={openAlert} handleClose={handleCloseAlert} error={errorMessage} />
    </div>
  );
}

export default App;
