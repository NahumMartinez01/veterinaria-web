import  { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(endpoint) {
    
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const getAllPets = async () => {
        try {
          const res = await axios.get(`${endpoint}/pets`);
    
          setData(res.data);
        } catch (error) {
          console.log(error.message);
        }
      };
  
  
      getAllPets()
    }, [endpoint]);
  
   return {data};
  
  }