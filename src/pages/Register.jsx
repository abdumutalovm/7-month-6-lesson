import { useState, useEffect } from 'react';
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/usersSlice';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        dispatch(register(user))
        nameRef.current.value = null;
        emailRef.current.value = null;
        passwordRef.current.value = null;

        navigate('/login')
    }

    return (
        <div className='container mx-auto'>
            <div onClick={handleDark} className='cursor-pointer w-20 flex mx-auto items-center gap-1'>
                {dark ? <FaRegMoon className='text-2xl text-center cursor-pointer mt-3 mb-3 text-zinc-600' /> : <CiSun className='text-2xl text-center cursor-pointer mt-3 mb-3' />}
                <h1 className={dark ? 'text-md text-zinc-600' : ''}>{dark ? "Dark" : "Light"}</h1>
            </div>

            <div className={dark ? 'bg-[#181818] p-3 w-2/6 w-100 shadow-xl rounded-t-lg mx-auto px-9 py-6' : 'bg-[#F5F5F5] p-3 w-2/6 w-100 shadow-2xl rounded-t-lg mx-auto px-9 py-6'}>
                <h1 className={dark ? 'text-center text-white text-[29px] font-bold' : 'text-center text-[29px] font-bold'}>Let's go!</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label htmlFor="name_" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Full Name</label>
                    <input type="text" ref={nameRef} id='name_' placeholder='John Doe' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-ava placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-ava bg-[#F5F5F5]   placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <label htmlFor="email_" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Email</label>
                    <input type="email" ref={emailRef} id='email_' placeholder='example@site.com' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email bg-[#F5F5F5] placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <label htmlFor="password_" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Choose Password</label>
                    <input type="password" id='password_' ref={passwordRef} placeholder='Minimum 8 characters' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock bg-[#F5F5F5] placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <button className='p-[20px] rounded-xl bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] text-white mt-4 mb-3 transition-all hover:bg-gradient-to-r hover:from-[#FF8394] hover:to-[#FF7089] '>Sign Up</button>
                    <button className={dark ? 'border border-zinc-800 p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-600 rounded-xl mt-2 mb-3 font-semibold text-zinc-300' : "border p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-400 rounded-xl mt-2 mb-3 font-semibold text-[#797979]"}>Sign Up with Google</button>
                    <div className='flex items-center mx-auto gap-16'>
                        <Link to='/login' className={dark ? 'hover:underline text-white' : "hover:underline"}>Go to login</Link>
                        <span className={dark ? 'text-center text-white' : 'text-center '}>
                            or log in width <a href="#" className='hover:text-zinc-400 hover:underline'>SSO</a></span>
                    </div>
                </form>
            </div>
            <div className={dark ? 'border bg-[#181818] border-t-zinc-800 border-l-0 border-r-0 border-b-0 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg' : 'border bg-[#F5F5F5] border-l-0 shadow-md border-r-0 border-b-0 border-t-indigo-200 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg'}>
                <p>By clicking the button above, you agree to our <a href="#" className='underline'>Terms of Services</a> and <a href="#" className='underline'>Privacy Policy.</a></p>
            </div>
        </div>
    )
}

export default Register