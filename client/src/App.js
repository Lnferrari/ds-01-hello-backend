import React, { useState } from 'react';
import './App.css';

function App() {
  const [courses, setCourses] = useState([])

  const getCourses = async () => {
    const apiResponse = await fetch('http://localhost:5000/json')
    const apiResult = await apiResponse.json()
    console.log(apiResult)
    setCourses(apiResult)
  }

  return (
    <div className="App">
      <button onClick={getCourses}>Show Courses</button>
      <ul style={{listStyle: 'none'}}>
        {
          courses.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
