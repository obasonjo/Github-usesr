import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(null);
    useEffect(()=>{
        function handleYear(){
            setYear(new Date().getFullYear())
        }
        handleYear()
    }, [])
  return (
    <div>
        <footer>
            <p>Copyright <span>{year}</span> All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default Footer