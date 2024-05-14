import logo from './logo.svg';
import './App.css';
import Catagory from './catagory';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {
  let [finalcat,setFinalcat] = useState([])
  let [finalpro,setFinalpro] = useState([])
  let [catName,setCatname] = useState('')
  let getcatagory=()=>{
  axios.get("https://dummyjson.com/products/categories")
  .then((res)=>res.data)
  .then((finalres)=>{
    setFinalcat(finalres)
  });
}

  let getProduct = ()=>{
    axios.get("https://dummyjson.com/products")
    .then((pres)=>pres.data)
    .then((finalRes)=>{
      setFinalpro(finalRes.products);
    })
  }
useEffect(()=>{
  getcatagory();
  getProduct();
},[])

  useEffect(()=>{
    if(catName!==''){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((pres)=>pres.data)
    .then((finalRes)=>{
    setFinalpro(finalRes.products);
    })
    }
    

  },[catName])
  let pitems=finalpro.map((val,index)=>{
    return(
      <Prductitems key={index} pitems={val}/>
    )
  })

  return (
    <>
    <div className='py-[40px]'>
      <div className='w-[1170px] mx-auto'>
        <h1 className='text-center text-[40px] font-bold mb-[20px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div>
            <Catagory finalcat={finalcat} setCatname={setCatname}/>
          </div>
          <div className='grid grid-cols-3 gap-4 w-[100%] h-96'>
            {pitems}
          </div>
        </div>
      </div>
      
    </div>
    
    </>
    
      
   
  );
}

export default App;
function Prductitems({pitems}){
  return(
    <div className='grid grid-cols-3 gap-4'>
      <div className='shadow-lg text-center p-4 font-medium'>
        <img src={pitems.thumbnail} className=' w-[700]'/>
          <h3>{pitems.title}</h3>
            <p>Rs {pitems.price}</p>
      </div>

    </div>
  )
}