import {useEffect, useState} from "react";

const Card = ({isbn}) => {
  const [data,setData] = useState([]);
  const apiURL = 'http://localhost:3001/comics/'+isbn;
  
  // API CALL
  const getData=()=>{
    fetch(apiURL
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  useEffect(()=>{
    getData()
  },[])

  console.log(data.author); 
  console.log(data.numPages); 



    return (
      <a href="none" className="card">
        <h3>{data.title} &rarr;</h3>
        <p>By: {data.author}</p>
        <p>Number of Pages: {data.numPages}</p>
      </a>
    )
  }

export default Card;