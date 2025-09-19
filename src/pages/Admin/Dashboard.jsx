import React, { useEffect, useState } from 'react'
import './dashboard.css';
import LogoutBtn from '../../components/LogoutBtn';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Inner } from '../../commons';
import { debounce } from 'lodash';
import { AdminNav, AdminSidebar, Service404, ErrClient } from '../../components';
import { FaSackDollar, FaCube, FaFileInvoice } from "react-icons/fa6";
import { FaSearch, FaTable, FaPen, FaRegEye } from 'react-icons/fa';
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { useQueries, useQuery } from '@tanstack/react-query';
import { ClientP, serviceP } from '../../assets';
import { useAuth } from '../../Context/AuthContext';
import { Api } from '../../utils';
import { Contacts, ServiceRequests, Settings } from '.'

function Dashboard() {

  const [activeTab, setActiveTab] = useState('Dashboard');
  const [viewMode, setViewMode] = useState('table');
  const [openMenuId, setOpenMenuId] = useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [searchClientName, setSearchClientName] = useState('');
  const [searchService, setSearchService] = useState('');
  const [currentClient, setCurrentClient] = useState(1);
  const [currentService, setCurrentService] = useState(1);

  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  const result = useQueries({
    queries: [
      {
        queryKey: ['contacts'],
        queryFn: async () => {
          try {
            const res = await Api.get('/contactUs');
            return res.data.contact || res.data;
          } catch (error) {
            console.error('Failed to fetch client:', error);
            throw error;
          }
        },
        enabled: !loading && isAuthenticated,
      },
      {
        queryKey: ['serviceRequests'],
        queryFn: async () => {
          try {
            const res = await Api.get('/serviceRequest');
            return res.data.services || res.data;
          } catch (error) {
            console.error('Failed to fetch service requests:', error);
            throw error;
          }
        },
        enabled: !loading && isAuthenticated,
      }
    ]
  });

  const [ contactQuery, serviceQuery] = result;
  const isLoading = contactQuery.isLoading || serviceQuery.isLoading;
  const isError = contactQuery.isError || serviceQuery.isError;
  const error = contactQuery.isError || serviceQuery.error;

  const refetchAll = () => {
    contactQuery.refetch();
    serviceQuery.refetch();
  };

  const contactData = contactQuery.data || [];
  const serviceData = serviceQuery.data || [];

  const clientPerPage = 4;
  const servicePerPage = 4;

  const handleSearchClientName = debounce((value) => {
    setSearchClientName(value);
  }, 300);

  const handleSearchService = debounce((value) => {
    setSearchService(value);
  }, 300);

  const filteredClients = contactData.filter(client => client.name.toLowerCase().includes(searchClientName.toLowerCase()));

  const filteredServices = serviceData.filter(service => service.serviceName.toLowerCase().includes(searchService.toLowerCase()));

  useEffect(() => {
    setCurrentClient(1);
  }, [searchClientName]);

  useEffect(() => {
    setCurrentService(1);
  }, [searchService])

  console.log(contactData)
  console.log(contactData)

  // Client pagination
  const indexOflastclient =  currentClient * clientPerPage;
  const indexofFirstClient = indexOflastclient - clientPerPage;
  const currentClientItem = filteredClients.slice(indexofFirstClient, clientPerPage);

  // service pagination
  const indexofLastService = currentService * servicePerPage;
  const indexofFirstService = indexofLastService - servicePerPage;
  const currentServiceItem = filteredServices.slice(indexofFirstService, servicePerPage);

  return (
    <Inner>
      <section className={`bg-[#e8e6e6] overflow-hidden min-h-screen flex`}
      style={{ paddingLeft: sideBarOpen ? '60' : '16'}}>
        <AdminSidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          open={sideBarOpen}
          setOpen={setSideBarOpen}
        />
        <div className='my-1 p-2 w-full overflow-hidden'
        style={{paddingLeft: sideBarOpen ? '15rem' : '4rem'}}>
          <AdminNav setActiveTab={setActiveTab}/>
          <AnimatePresence mode='wait'>
            {activeTab === 'Dashboard' && (
              <motion.div
                key='Dashboard'
                initial={{opacity: 0, scale: 1}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.95}}
                transition={{duration: 0.3}}
                >
                  <>
                    <div className='my-[2rem] overflow-hidden grid grid-cols-4 gap-2 px-2 Analytics'>
                      <div className='bg-[#fff] rounded-md flex flex-col gap-1'>
                        <h2 className='px-2 py-2 flex items-center gap-2 text-lg text-[#7a7979]'>
                          <FaSackDollar className='text-[#104579]' size={30}/> Total estimate 
                        </h2>
                        <div className='p-2 flex justify-between'>
                          <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold text-2xl text-[#171616]'>
                              22.42k
                            </h1>
                            <div className='flex gap-2 items-center'>
                              <p className='border-3 p-1 w-3 h-3 rounded-full border-green-500'></p>
                              <p className='text-[#7a7979] font-semibold text-xs penOrders'>ACCEPTED</p>
                            </div>
                          </div>
                          <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold text-2xl text-[#171616]'>
                              15.76k
                            </h1>
                            <div className='flex gap-2 items-center'>
                              <p className='border-3 p-1 w-3 h-3 rounded-full border-orange-500'></p>
                              <p className='text-[#7a7979] font-semibold text-xs penOrders'>PENDING</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center py-1 px-2 justify-between bg-[#f7f6f6] border-t-1 border-[#ece8e8] rounded-b-md'>
                          <div className='flex items-center gap-1 text-sm text-green-600 iconsT'><IoIosTrendingUp size={20} className=''/>2.75% <span className='text-[#9b9898]'>Last month</span></div>
                          <a className='text-[#807f7f] text-sm cursor-pointer hover:underline iconsT'>view more</a>
                        </div>
                      </div>
                      <div className='bg-[#fff] rounded-md flex flex-col gap-1'>
                        <h2 className='px-2 py-2 flex items-center gap-2 text-lg text-[#7a7979]'>
                          <FaCube className='text-green-500' size={30}/> Changes order 
                        </h2>
                        <div className='p-2 flex justify-between'>
                          <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold text-2xl text-[#171616]'>
                              12.40k
                            </h1>
                            <div className='flex gap-2 items-center'>
                              <p className='border-3 p-1 w-3 h-3 rounded-full border-green-500 '></p>
                              <p className='text-[#7a7979] font-semibold text-xs penOrders'>ACCEPTED</p>
                            </div>
                          </div>
                          <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold text-2xl text-[#171616]'>
                              13.97k
                            </h1>
                            <div className='flex gap-2 items-center'>
                              <p className='border-3 p-1 w-3 h-3 rounded-full border-orange-500'></p>
                              <p className='text-[#7a7979] font-semibold text-xs penOrders'>PENDING</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center py-1 px-2 justify-between bg-[#f7f6f6] border-t-1 border-[#ece8e8] rounded-b-md'>
                          <div className='flex items-center gap-1 text-sm text-red-600 iconsT'><IoIosTrendingDown size={20} className=''/>1.87% <span className='text-[#9b9898]'>Last month</span></div>
                          <a className='text-[#807f7f] text-sm cursor-pointer hover:underline iconsT'>view more</a>
                        </div>
                      </div>
                      <div className='bg-[#fff] rounded-md flex flex-col gap-1'>
                        <h2 className='px-2 py-2 flex items-center gap-2 text-lg text-[#7a7979]'>
                          <FaFileInvoice className='text-red-400' size={30}/> Invoices
                        </h2>
                        <div className='p-2 flex justify-between'>
                          <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold text-2xl text-[#171616]'>
                              47.02k
                            </h1>
                            <div className='flex gap-2 items-center'>
                              <p className='border-3 p-1 w-3 h-3 rounded-full border-green-500'></p>
                              <p className='text-[#7a7979] font-semibold text-xs penOrders'>PAID</p>
                            </div>
                          </div>
                          <div className='flex flex-col gap-2 items-center'>
                            <h1 className='font-bold text-2xl text-[#171616]'>
                              18.97k
                            </h1>
                            <div className='flex gap-2 items-center'>
                              <p className='border-3 p-1 w-3 h-3 rounded-full border-orange-500'></p>
                              <p className='text-[#7a7979] font-semibold text-xs penOrders'>PENDING</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center py-1 px-2 justify-between bg-[#f7f6f6] border-t-1 border-[#ece8e8] rounded-b-md'>
                          <div className='flex items-center gap-1 text-sm text-green-600 iconsT'><IoIosTrendingUp size={20} className=''/>5.09% <span className='text-[#9b9898]'>Last month</span></div>
                          <a className='text-[#807f7f] text-sm cursor-pointer hover:underline iconsT'>view more</a>
                        </div>
                      </div>
                      <div className='bg-gradient-to-br from-[#F0BC02] to-[#104579] rounded-md flex gap-1 items-center justify-center'>
                        <div className='flex flex-col items-center'>
                          <p className='text-[#fff] text-base'>Overdue</p>
                          <h1 className='font-bold text-2xl text-[#fff] iconsT'>
                            17.56k
                          </h1>
                          <button className='px-3 py-1 my-2 rounded-full backdrop-blur-2xl text-[#fff] cursor-pointer iconsT'>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='my-[2rem] overflow-hidden grid grid-cols-[60%_40%] gap-2 px-2 Tables'>
                      <div className='bg-[#fff] rounded-md p-2'>
                        <h1 className='text-[#2c2b2b] font-semibold leading-relaxed underline'> Service requests</h1>
                        <div className='flex gap-2 px-1 items-center justify-end searchBtn'>
                          <div className='flex items-center relative gap-3'>
                            <input  
                              type='text'
                              placeholder='Search by service name...'
                              value={searchService}
                              onChange={(e) => handleSearchService(e.target.value)}
                              className='pl-10 pr-4 py-1 border my-1.5 border-gray-300  rounded-md shadow-sm focus:ring-[#535353] focus:border-[#535353] w-full'
                              />
                              <FaSearch 
                                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                              />
                          </div>
                        </div>
                        {currentServiceItem.length === 0 ? (
                          <Service404/>
                        ) : (
                          <motion.table
                           className='w-full text-left mt-1 bg-transparent tableContent'
                           initial= {{ opacity: 0, y: 40 }}
                           animate= {{ opacity: 1, y: 0 }}
                           transition={{ duration:2}}
                            >
                            <thead
                            className='bg-transparent border-b-1 border-[#aeaaaa]'>
                              <tr>
                                <th className='px-4 py-2'></th>
                                <th className='px-4 py-2'>Name</th>
                                <th className='px-4 py-2'>Email</th>
                                <th className='px-4 py-2'>Budget</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentServiceItem?.map((service) => (
                                <tr 
                                  key={service._id}
                                  className='border-b-1 border-[#aeaaaa]'>
                                    <td className='px-4 py-1 flex items-center'>
                                      <img 
                                        src={serviceP}
                                        alt='Profile'
                                        loading='lazy'
                                        className='w-8 h-8 object-cover rounded-full'
                                      />
                                    </td>
                                      <td className='px-4 py-1'>{service.serviceName}</td>
                                      <td className='px-4 py-1'>{service.Email}</td>
                                      <td className='flex justify-center items-center'><span className=' px-4 py-1 bg-green-200 rounded-full'>$ {service.budget}</span></td>
                                  </tr>
                              ))}
                            </tbody>
                          </motion.table>
                        )}
                      </div>
                      <div className='bg-[#fff] rounded-md p-2 bg-gradient-to-br from-[#104579] to-[#F0BC02] text-white'>
                        <h1 className='text-[#fff] font-semibold leading-relaxed underline'> Recent Clients</h1>
                        <div className='flex gap-2 px-1 items-center justify-end searchBtn'>
                          <div className='flex items-center relative gap-3'>
                            <input  
                              type='text'
                              placeholder='Search by client name...'
                              value={searchClientName}
                              onChange={(e) => handleSearchClientName(e.target.value)}
                              className='pl-10 pr-4 py-1 border my-1.5 border-gray-300  rounded-md shadow-sm focus:ring-[#535353] focus:border-[#535353] w-full'
                              />
                              <FaSearch 
                                className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                              />
                          </div>
                        </div>
                        {currentClientItem.length === 0 ? (
                          <ErrClient/>
                        ) : (
                          <motion.table
                           className='w-full text-left mt-1 bg-transparent tableContent'
                           initial= {{ opacity: 0, y: 40 }}
                           animate= {{ opacity: 1, y: 0 }}
                           transition={{ duration:2}}
                            >
                            <thead
                            className='bg-transparent border-b-1 border-[#aeaaaa]'>
                              <tr>
                                <th className='px-4 py-2'></th>
                                <th className='px-4 py-2'>Email</th>
                                <th className='px-4 py-2'>name</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentClientItem?.map((client) => (
                                <tr 
                                  key={client._id}
                                  className='border-b-1 bborder-[#aeaaaa]'>
                                    <td className='px-4 py-1'>
                                      <img 
                                        src={ClientP}
                                        alt='Profile'
                                        loading='lazy'
                                        className='w-8 h-8 object-cover rounded-full'
                                      />
                                    </td>
                                      <td className='px-4 py-1'>{client.Email}</td>
                                      <td className='px-4 py-1'>{client.name}</td>
                                  </tr>
                              ))}
                            </tbody>
                          </motion.table>
                        )}
                      </div>
                    </div>
                  </>
                </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode='wait'>
            {activeTab === 'Contacts' && (
              <motion.div
                key='Contacts'
                initial={{ opacity: 0, scale: 1}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95}}
                transition={{ duration: 0.3 }}
                >
                 <Contacts/>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode='wait'>
            {activeTab === 'Service requests' && (
              <motion.div
                key='ServiceRequests'
                initial={{ opacity: 0, scale: 1}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95}}
                transition={{ duration: 0.3 }}
                >
                 <ServiceRequests/>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode='wait'>
            {activeTab === 'Settings' && (
              <motion.div
                key='Settings'
                initial={{ opacity: 0, scale: 1}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95}}
                transition={{ duration: 0.3 }}
                >
                 <Settings/>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Inner>
  )
}

export default Dashboard