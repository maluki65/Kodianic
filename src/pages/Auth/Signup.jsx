import React, { useState } from 'react';
import { Inner } from '../../commons';
import useSignUp from '../../Hooks/useSignUp';
import { BG01, BG02, JBG } from '../../assets';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Bloader } from '../../components';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const navigate = useNavigate();
  const { isLoading, error, success, registerUser } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await registerUser(values);
  };

  const handleNavigate= () =>{
    navigate('/Login')
  }

  return (
    <Inner>
      <section className='min-h-screen overflow-hidden flex items-center justify-center w-[100%]'>
        <div className='w-full p-[10px] grid grid-cols-[40%_60%] items-center justify-center gap-1 px-[4%] containerSi'>
          <div className='py-[5px] px-[20px] flex flex-col space-y-3'>
            <h1 className='text-[#104579] hover:text-[#F0BC02] font-semibold text-xl leading-relaxed cursor-pointer'>Kodi<span className='text-[#F0BC02] hover:text-[#104579]'>anic</span></h1>

            <h2 className='text-2xl font-semibold'>
            Keep your business organized, keep it growing
            </h2>
            <h3 className='text-md text-[#666464]'>
              Stay ahead with tools that organize tasks and free your time to grow online.
            </h3>
            <div className='flex items-center justify-center'>
              <form onSubmit={handleSignup} className='w-[100%]'>
                {error && (
                  <div className="text-red-600 text-sm mb-3">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="text-green-600 text-sm mb-3">
                    {success}
                  </div>
                )}
                <div className='flex flex-col gap-1'>
                  <label className='flex items-center gap-2'>Username <span className='text-red-600'>*</span></label>
                  <input
                    name='username'
                    type='text'
                    value={values.username}
                    onChange={handleChange}
                    placeholder="username"
                    required
                    className="w-full p-2 mb-3 border-2 border-gray-300 rounded"
                    rules={[
                      {
                        message: 'Please enter your Username!',
                      },
                    ]}
                  />
                </div>
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
                <div className='flex flex-col gap-1'>
                  <label className='flex items-center gap-2'>Confirm password<span className='text-red-600'>*</span></label>
                  <div className='relative mb-3 flex items-center'>
                    <input
                      name='passwordConfirm'
                      value={values.passwordConfirm}
                      onChange={handleChange}
                      type={showPasswordConfirm ? 'text' : 'password'}
                      placeholder="Password"
                      required
                      rules={[
                        {
                          message: 'Please confirm your password',
                        },
                      ]}
                      className="w-full p-2 mb-3 border-2 border-gray-300 rounded"
                    />
                    <span
                      onClick={() => setShowPasswordConfirm(prev => !prev)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    >
                      {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </span>
                  </div>
                </div>
                <button
                  className="relative w-full bg-[#104579] text-white cursor-pointer rounded-md py-3 px-2"
                  type='submit'
                  disabled={isLoading}
                  >
                    {isLoading ? <Bloader/> : 'Create Account'}
                </button>
                <p className='text-[#666464] text-right text-sm my-2'>Already have an account ? <span className='underline cursor-pointer' onClick={handleNavigate}>Login</span></p>
              </form>
            </div>
          </div>
          <div className='h-full w-full rounded-md containerSiImg'
          style={{
            backgroundImage: `url(${JBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          >
          </div>
        </div>
      </section>
    </Inner>
  )
}

export default Signup