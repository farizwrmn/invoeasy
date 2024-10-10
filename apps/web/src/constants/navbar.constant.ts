import { UserLinkItem } from '@/interfaces/navbar.interface';
import { IoNewspaperOutline } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbStatusChange } from 'react-icons/tb';
import { SiHomebridge } from 'react-icons/si';
import { IoIosPeople } from 'react-icons/io';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';

export const AdminLinkItems: Array<UserLinkItem> = [
  {
    name: 'Home',
    icon: SiHomebridge,
    href: '/dashboard',
    key: 'Dashboard',
  },
  {
    name: 'Products & Services',
    icon: MdOutlineDesignServices,
    href: '/dashboard/products',
    key: 'Products',
  },
  {
    name: 'Invoices',
    icon: IoNewspaperOutline,
    href: '/dashboard/invoices',
    key: 'Invoices',
  },
  {
    name: 'Customers',
    icon: IoIosPeople,
    href: '/dashboard/customers',
    key: 'Customers',
  },
];

export const UserLinkItems: Array<UserLinkItem> = [
  {
    name: 'Billings',
    icon: FaMoneyBillWaveAlt,
    href: '/dashboard/billings',
    key: 'Billings',
  },
];
