import React, { useState } from 'react';
import { Inner } from '../../commons';
import useLogin from '../../Hooks/useLogin';
import { BG01, BG02, JBG } from '../../assets';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Bloader } from '../../components';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const { loginUser, error, isLoading} = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser(values);
  };

  const handleNavigate= () => {
    navigate('/Signup');
  }
  return (
    <Inner>
      <section className='h-screen overflow-hidden flex items-center justify-center w-[100%]'>
        <div className='w-full p-[10px] grid grid-cols-[60%_40%] items-center justify-center gap-1 px-[4%] containerSi'>
          <div className='h-full w-full rounded-md containerSiImg'
            style={{
              backgroundImage: `url(${BG01})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            >
          </div>
          <div className='py-[5px] px-[20px] flex flex-col space-y-3'>
            <h1 className='text-[#104579] hover:text-[#F0BC02] font-semibold text-xl leading-relaxed cursor-pointer'>Kodi<span className='text-[#F0BC02] hover:text-[#104579]'>anic</span></h1>

            <h2 className='text-2xl font-semibold'>
            Keep your business organized, keep it growing
            </h2>
            <h3 className='text-md text-[#666464]'>
              Stay ahead with tools that organize tasks and free your time to grow online.
            </h3>
            <div className='flex items-center justify-center'>
              <form onSubmit={handleLogin} className='w-[100%]'>
                {error && (
                  <div className="text-red-600 text-sm mb-3">
                    {error}
                  </div>
                )}
                <div className='flex flex-col gap-1'>
                  <label className='flex items-center gap-2'>Email<span className='text-red-600'>*</span></label>
                  <input
                    name='email'
                    type='text'
                    value={values.email}
                    onChange={handleChange}
                    placeholder="doe@gmail.com"
                    required
                    className="w-full p-2 mb-3 border-2 border-gray-300 rounded"
                    rules={[
                      {
                        message: 'Please enter your email!',
                      },
                    ]}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='flex items-center gap-2'>Password<span className='text-red-600'>*</span></label>
                  <div className='relative mb-3 flex items-center'>
                    <input
                      name='password'
                      value={values.password}
                      onChange={handleChange}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      required
                      rules={[
                        {
                          message: 'Please enter your password',
                        },
                      ]}
                      className="w-full p-2 mb-3 border-2 border-gray-300 rounded"
                    />
                    <span
                      onClick={() => setShowPassword(prev => !prev)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    >
                      {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </span>
                  </div>
                </div>
                <button
                  className="relative w-full inset-0 bg-[#104579] text-white cursor-pointer rounded-md py-3 px-2"
                  type='submit'
                  disabled={isLoading}
                  >
                    {isLoading ? <Bloader/> : 'login'}
                </button>
                <p className='text-[#666464] text-right text-sm my-2'>Don't have an account ? <span className='underline cursor-pointer' onClick={handleNavigate}>Signup</span></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Inner>
  )
}

export default Login