import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { remove } from '../redux/tokenSlice';
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";

function Home() {
    const users = useSelector(state => state.users.value);
    const [dark, setDark] = useState(() => {
        const savedDark = localStorage.getItem('dark');
        return savedDark ? JSON.parse(savedDark) : false;
    });
    function handleDark() {
        setDark(prevDark => !prevDark);
    }
    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(dark));
        const body = document.querySelector('body');
        if (dark) {
            body.classList.add('bg-black');
        } else {
            body.classList.remove('bg-black');
        }
    }, [dark]);
    const dispatch = useDispatch();
    function handleLogOut(e) {
        e.preventDefault();
        dispatch(remove());
    }
    return (
        <div className='container w-100 max-w-7xl mx-auto p-4'>

            <header className='flex items-center justify-between'>

                <a href="#" alt="company logo" className={dark ? 'text-3xl font-bold text-zinc-300' : 'text-3xl font-bold text-zinc-500'}>Users Saver</a>
                <div onClick={handleDark} className='cursor-pointer w-20 flex mx-auto items-center gap-1'>
                    {dark ? <FaRegMoon className='text-2xl text-center cursor-pointer mt-3 mb-3 text-zinc-600' /> : <CiSun className='text-2xl text-center cursor-pointer mt-3 mb-3' />}
                    <h1 className={dark ? 'text-md text-zinc-600' : ''}>{dark ? "Dark" : "Light"}</h1>
                </div>
                <button className={dark ? 'border border-zinc-300 p-2 rounded-md text-white hover:bg-zinc-800' : "border border-zinc-300 p-2 rounded-md hover:bg-zinc-200"} onClick={handleLogOut}>Log out</button>
            </header>

            <table className={dark ? 'w-3/4 text-white text-center mx-auto mt-10' : 'w-3/4 text-center mx-auto mt-10'}>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                {
                    users.map((el, index) => {
                        return (
                            <tbody>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.password}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Home