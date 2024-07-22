import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (!user) {
  //     router.push('/signin');
  //   }
  // }, [router]);

  return children;
};

export default PrivateRoute;