import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/tokenSlice';

function Home() {

    const dispatch = useDispatch();
    function handleLogOut(e) {
        e.preventDefault();
        dispatch(remove());
    }
    return (
        <div>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}

export default Home