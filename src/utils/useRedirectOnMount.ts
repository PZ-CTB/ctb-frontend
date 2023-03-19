import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectOnMount = (to: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, []);
};

export default useRedirectOnMount;
