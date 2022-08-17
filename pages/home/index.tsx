// import React from 'react'

const Home = (): JSX.Element => {

    let date = new Date();
    console.log(date)
    
    
    return(
    <div>
        <h1>Home Page</h1>
        <h2>Local Time and date</h2>
        <h1>Date:- {date.toDateString()}</h1>
        <h2>Time:- {date.toLocaleTimeString()}</h2>
    </div>
)}


export default Home;