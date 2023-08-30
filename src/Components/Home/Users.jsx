import React, { useState } from 'react';


const Users = () => {
    const [inp, setInp] = useState('');
    const [githubUser, setGithubUser] = useState(null);
    const [isClick, setIsClick] = useState(false);
    const [err, setErr] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')


    function handleChange(e){
        const {value} = e.target;
        setInp(value)
    }

    function handleClick(){
        setIsClick(true)
    }

    async function handleUser(e){
        e.preventDefault();
        try {
            const base_url = `https://api.github.com/users/${inp}`;
            await fetch(base_url)
            .then(res => res.json())
            .then(userInfo => {
                setGithubUser(userInfo)
                setIsClick(false)
            })
        } catch (error) {
            // setErr(t;rue);
            setErrorMsg(error)
        }

    }

    if(errorMsg){
        return(
            <div>
                <h3>{errorMsg}</h3>
            </div>
        )
    }
    
  return (
    <div>
        <form onSubmit={handleUser}>
            <input type="text" placeholder='Enter a github username' onChange={handleChange} />
            <button onClick={handleClick}>{isClick?"pls wait..." : "Check Github User"}</button>
        </form>

        <h2>{errorMsg}</h2>

        {
            githubUser &&(
                githubUser.login? <div>
                <h2>Fullname: {githubUser.login}</h2>
                <img src={githubUser.avatar_url} alt="" />
                <p>{githubUser.bio? <span>Bio: {githubUser.bio}</span> : "This user doesn't include their bio"}</p>
            </div>: <p>{githubUser.message}</p>
            )
        }
    </div>
  )
}

export default Users