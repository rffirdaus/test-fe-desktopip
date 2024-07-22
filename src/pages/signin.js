import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "../components/navbarSignin";
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSignIn = () => {
    if (email) {
      localStorage.setItem('user', JSON.stringify({ email }));
      router.push('/');
    }
  };

  return (
    <div className='pt-4 px-4 md:px-12 bg-[#01449C] h-screen'>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-md w-[612px] min-h-customSignin flex items-center mt-12 px-20">
          <div className='w-full'>
            <h1 className="text-[32px] text-[#041836] mb-6">Sign In</h1>
            <p className='text-[#888888] text-base font-normal mb-2'>Email</p>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-2 border border-custom-blue rounded-3xl text-black font-normal text-base"
            />
            <button
              onClick={handleSignIn}
              className={`w-full py-2 rounded-3xl mb-4 ${email ? 'bg-[#01449C] text-white' : 'bg-[#666666] text-[#888888]'}`}
            >
              Sign In
            </button>
            <p className='text-[#0249A6] text-center text-base mb-4'>Forget Password</p>
            <p className='text-[#606666] text-center text-base mb-4'>Don’t have an account? <Link className="text-[#0249A6]" href={`#`}>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;