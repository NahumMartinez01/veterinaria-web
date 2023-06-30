import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

//import {Link} from 'react-router-dom'



const ShowPets = () => {
  
  
  const {data} = useFetch("http://localhost:8000/api");
  
  
  console.log(data);


  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>specie</th>
              <th>age</th>
              <th>weight</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pet) => (
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.species}</td>
                <td>{pet.age}</td>
                <td>{pet.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowPets;
