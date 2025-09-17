import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdConnectWithoutContact, MdOutlineSettings, MdOutlineDesignServices  } from "react-icons/md";

export const AdminNavlinks = [
  {
    name: 'Dashboard',
    imgUrl: MdOutlineDashboard,
    link: '/',
    disabled: true,
  },
  {
    name: 'Contact',
    imgUrl: MdConnectWithoutContact,
    link: '/',
    disabled: true,
  },
  {
    name: 'Serice requests',
    imgUrl: MdOutlineDesignServices,
    link: '/',
    disabled: true,
  },
  {
    name: 'Settings',
    imgUrl: MdOutlineSettings,
    link: '/',
    disabled: true,
  },
]