import React, { useEffect, useState } from 'react'
import './dashboard.css';
import LogoutBtn from '../../components/LogoutBtn';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Inner } from '../../commons';
import { debounce } from 'lodash';
import { AdminNav, AdminSidebar } from '../../components';

function Dashboard() {

  const [activeTab, setActiveTab] = useState('Dashboard');
  const [viewMode, setViewMode] = useState('table');
  const [openMenuId, setOpenMenuId] = useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  return (
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
       </div>
    </section>
  )
}

export default Dashboard