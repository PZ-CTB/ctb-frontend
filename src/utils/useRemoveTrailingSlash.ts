import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useRemoveTrailingSlash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.match('/.*/$')) {
      navigate(
        {
          pathname: location.pathname.replace(/\/+$/, ''),
          search: location.search,
        },
        { replace: true }
      );
    }
  }, []);
};

export default useRemoveTrailingSlash;
