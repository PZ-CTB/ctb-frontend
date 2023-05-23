import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useRedirectOnMountIfPathname = (to: string, pathname: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  const condition = location.pathname === pathname;

  useEffect(() => {
    if (condition) navigate(to, { replace: true });
  }, [condition]);
};

export default useRedirectOnMountIfPathname;
