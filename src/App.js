import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from './Posts';


function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <div>
      <h1><Posts /></h1>

    
    </div>
  );
}

export default App;
