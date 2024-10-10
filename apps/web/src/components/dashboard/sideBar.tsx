import Logo from '@/components/logo/logo';
import React from 'react';
import { AdminLinkItems, UserLinkItems } from '@/constants/navbar.constant';
import NavItems from './navItems';
import { useAppSelector } from '@/lib/hooks';

const SideBar = () => {
  const { status, user } = useAppSelector((state) => state.auth);

  return (
    <div className="fixed w-64 min-h-screen hidden lg:block bg-gradient-to-br from-teal-50 via-slate-300 to-green-500 shadow-2xl shadow-slate-500 z-10">
      <div className="flex items-center justify-center mx-10">
        <Logo />
      </div>
      {user.role === 'admin'
        ? // Admin-specific links
          AdminLinkItems.map((item) => (
            <NavItems key={item.key} icon={item.icon} href={item.href}>
              {item.name}
            </NavItems>
          ))
        : // User-specific links
          UserLinkItems.map((item) => (
            <NavItems key={item.key} icon={item.icon} href={item.href}>
              {item.name}
            </NavItems>
          ))}

      <div
        className={
          user.role === 'admin'
            ? 'text-center font-light cursor-default mt-72'
            : 'text-center font-light cursor-default mt-[500px]'
        }
      >
        <p className="font-bold border-b-2 border-teal-700">
          © invoeasy, v.0.0.1
        </p>
        <span className="">2024 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default SideBar;
