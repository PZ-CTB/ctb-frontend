import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectOnMount = (to: string, condition = true) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) navigate(to, { replace: true });
  }, [condition]);
};

export default useRedirectOnMount;
