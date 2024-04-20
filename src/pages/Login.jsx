import { useNavigate, Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/tokenSlice';


function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const users = useSelector(state => state.users.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [dark, setDark] = useState(() => {
        const savedDark = localStorage.getItem('dark');
        return savedDark ? JSON.parse(savedDark) : false;
    });


    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(dark));
        const body = document.querySelector('body');
        if (dark) {
            body.classList.add('bg-black');
        } else {
            body.classList.remove('bg-black');
            body.classList.add('bg-red')
        }
    }, [dark]);

    function handleDark() {
        setDark(prevDark => !prevDark);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let user = users.find((el) => {
            return el.email == emailRef.current.value && el.password == passwordRef.current.value
        });

        if (user) {
            dispatch(add(user.email));
            navigate('/')
        } else {
            alert("User with such email and password does not exist!")
        }

    }

    return (
        <div className={dark ? 'container mx-auto bg-black' : 'container mx-auto'}>
            <div onClick={handleDark} className='cursor-pointer w-20 flex mx-auto items-center gap-1'>
                {dark ? <FaRegMoon className='text-2xl text-center cursor-pointer mt-3 mb-3 text-zinc-600' /> : <CiSun className='text-2xl text-center cursor-pointer mt-3 mb-3' />}
                <h1 className={dark ? 'text-md text-zinc-600' : ''}>{dark ? "Dark" : "Light"}</h1>
            </div>

            <div className={dark ? 'bg-[#181818] p-3 w-2/6 w-100 shadow-xl rounded-t-lg mx-auto px-9 py-6' : 'bg-[#F5F5F5] p-3 w-2/6 w-100 shadow-xl rounded-t-lg mx-auto px-9 py-6'}>
                <h1 className={dark ? 'text-center text-white text-[29px] font-bold' : 'text-center text-[29px] font-bold'}>Welcome back!</h1>
                <form className='flex flex-col'>
                    <label htmlFor="email" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Email</label>
                    <input ref={emailRef} type="email" id='email' placeholder='example@site.com' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'bg-[#F5F5F5] outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <label htmlFor="password" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Choose Password</label>
                    <input ref={passwordRef} type="password" placeholder='Minimum 8 characters' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'bg-[#F5F5F5] outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <button onClick={handleSubmit} className='p-[20px] rounded-xl bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] text-white mt-4 mb-3 transition-all hover:bg-gradient-to-r hover:from-[#FF8394] hover:to-[#FF7089] '>Log in</button>
                    <button className={dark ? 'border border-zinc-800 p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-600 rounded-xl mt-2 mb-3 font-semibold text-zinc-300' : "border p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-400 rounded-xl mt-2 mb-3 font-semibold text-[#797979]"}>Log in Up with Google</button>
                    <div className='flex items-center mx-auto gap-16'>
                        <Link to='/register' className={dark ? 'hover:underline text-white' : "hover:underline"}>Back to register</Link>
                        <span className={dark ? 'text-center text-white' : 'text-center '}>

                            or log in width <a href="#" className='hover:text-zinc-400 hover:underline'>SSO</a></span>
                    </div>
                </form>
            </div>
            <div className={dark ? 'border bg-[#181818] border-t-zinc-800 border-l-0 shadow border-r-0 border-b-0 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg' : 'border bg-[#F5F5F5] border-l-0 shadow border-r-0 border-b-0  border-t-indigo-200 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg'}>
                <p>By lobby the button above, you agree to our <a href="#" className='underline'>Terms of Services</a> and <a href="#" className='underline'>Privacy Policy.</a></p>
            </div>
        </div>
    )
}

export default Login