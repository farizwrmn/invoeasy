'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRouteUser: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/');
    }
  }, [token, router]);

  return <>{children}</>;
};

export default ProtectedRouteUser;