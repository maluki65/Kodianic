import React, { useState, useEffect} from 'react'
import { useAuth } from '../../Context/AuthContext';
import Api from '../../utils/api';
import './dashboard.css';
import { useQuery } from '@tanstack/react-query';
import { ServiceItems, Loader, Service404 } from '../../components';
import { debounce, values } from 'lodash';
import { Inner } from '../../commons';
import { FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Contacts() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [CurrentServicePage, setCurrentServicePage] = useState(1);

  const { data: serviceRequest = [], isError, isLoading , refetch } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      try {
        const res = await Api.get('/serviceRequest');
        return res.data.contact || res.data;
      } catch (error) {
        console.error('Failed to fetch service requests:', error);
        throw error;
      }
    },
    enabled: isAuthenticated,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });

  const ServicesPerPage = 6;

  const handleSearchServiceName = debounce((value) => {
    setSearchTerm(value);
  }, 300);

  const filteredServices = serviceRequest.filter(serviceRequest => serviceRequest.serviceName.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    setCurrentServicePage(1);
  }, [searchTerm]);

  const indexOflastservice = CurrentServicePage * ServicesPerPage;
  const indexofFirstService = indexOflastservice - ServicesPerPage;
  const currentServiceRequest = filteredServices.slice(indexofFirstService, indexOflastservice);

  const totalServicePages = Math.ceil(filteredServices.length / ServicesPerPage);

  return (
    <Inner>
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <div className='bg-[#e8e6e6] px-[4%] py-2'>
            <div className='flex my-[1.5rem] items-center justify-between ConSEa'>
              <h1 className='text-[#000] font-semibold leading-relaxed underline cursor-pointer'>Service requests</h1>
              <div className='flex gap-2 px-1 items-center justify-end'>
                <div className='flex items-center relative gap-3'>
                  <input 
                    type='text'
                    placeholder='Search by service name..'
                    value={searchTerm}
                    onChange={(e) => handleSearchServiceName(e.target.value)}
                    className=' pl-10 pr-4 py-1 border my-1.5 border-gray-500 rounded-md shadow-cm focus:ring-[#535353] focus:border-[#535353] w-full'
                  />
                  <FaSearch
                    className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                  />
                </div>
              </div>
            </div>

            {currentServiceRequest.length === 0 ? (
              <Service404/>
            ): (
              <div className='grid grid-cols-3 gap-2 justify-center items-center ContactsDash'>
                {currentServiceRequest.map((service) => (
                  <motion.div
                    key={service._id}
                    initial= {{ opacity: 0, y: 20 }}
                    animate= {{ opacity: 1, y: 20}}
                    exit={{
                      opacity: 0,
                      y: -20
                    }}
                    transition={{ duration: 0.5 }}
                    >
                      <ServiceItems
                        service={service}
                      />
                  </motion.div>
                ))}
              </div>
            )}
            <ul className="flex justify-center gap-1 bg-[#e8e6e6]  text-gray-900 mt-[2rem]">
              <li>
                <button
                  onClick={() => setCurrentServicePage((prev) => Math.max(prev - 1, 1))}
                  disabled={ currentServiceRequest === 1}
                  aria-label="Previous page"
                  className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 disabled:opacity-50 rtl:rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              {totalServicePages <= 7 ? (
                Array.from({ length: totalServicePages }, (_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setCurrentServicePage(i + 1)}
                      className={`block size-8 rounded text-center text-sm/8 font-medium transition-colors ${
                        CurrentServicePage === i + 1
                          ? 'border border-[#e0C128] bg-[#e0C128] text-white'
                          : 'border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))
                ) : (
                  <>
                    <li>
                      <button
                        onClick={() => setCurrentServicePage(1)}
                        className={`block size-8 rounded text-center text-sm/8 font-medium transition-colors ${
                          CurrentServicePage === 1
                            ? 'border border-[#e0C128] bg-[#e0C128] text-white'
                            : 'border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        1
                      </button>
                    </li>
                    <li className="flex items-center justify-center size-8 text-gray-500">...</li>
                    <li>
                      <button
                        onClick={() => setCurrentServicePage(totalServicePages)}
                        className={`block size-8 rounded text-center text-sm/8 font-medium transition-colors ${
                          CurrentServicePage === totalServicePages
                            ? 'border border-[#e0C128] bg-[#e0C128] text-white'
                            : 'border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {totalServicePages}
                      </button>
                    </li>
                  </>
              )}
              <li >
                <button
                  onClick={() => setCurrentServicePage((prev) => Math.min(prev + 1, totalServicePages))}
                  disabled={CurrentServicePage === totalServicePages}
                  aria-label="Next page"
                  className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 disabled:opacity-50 rtl:rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          
        </>
        
      )}
    </Inner>
  )
}

export default Contacts