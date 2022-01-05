import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Items from './Items'
import ItemFormHandler from './ItemFormHandler';
function App(){

  const [intakeItem, setIntakeItem] = useState([]);

  const getData = () =>{
    axios.get('./list')
    .then(res => setIntakeItem(res.data))
    .catch(err => console.log(err))
  }

  const addData = (newData) => {
    axios.post('./list', newData)
    .then(res => {
      setIntakeItem(prevItem => [...prevItem, res.data])
    })
    .catch(err => console.log(err))
  }

  const deleteData = (itemId) =>{
    axios.delete(`./list/${itemId}`)
    .then(res => { 
      setIntakeItem(prevItem => prevItem.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))

  }

  const editData = (updates, itemId) => {
    axios.put(`./list/${itemId}`, updates)
    .then(res => {
      setIntakeItem(prevItem => prevItem.map(item => item._id !== itemId ? item : res.data));})
    .catch(err => console.log(err))
  }
  

  useEffect(() =>{
    getData()
  }, []);

  const recycleItemsList = intakeItem.map(item =>
     <Items {...item} 
     deleteData={deleteData}
     editData={editData} 
     key={item.title}/>)
  return(
    
    <div id='itemsDiv'>
      <ItemFormHandler
      btnText='Add Item' 
      submit={addData}/>
      {recycleItemsList}
    
    </div>
    
    
      
  );
}
export default App;


// function App() {

//   const [intakeItem, setIntakeItem] = useState([]);

//   useEffect(() => {
//     const getData = () => {
//       fetch(`/recycleList`)
//       .then(res => res.json())
//       .then(res => console.log(res))
//       .then(res => (setIntakeItem(res))
//       .catch(err => console.log(err))
      
//       )}
//       getData()
//   })
//   return (
//     <div id='result'>
//         <h1>{intakeItem}</h1>
//     </div>
    
//   );
// }

// export default App;
