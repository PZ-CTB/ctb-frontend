import axios from 'axios';
import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount: number, error: unknown) => {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            const status = error.response.status.toString();

            // do not retry if client error (400s/500s)
            if (status.startsWith('4') || status.startsWith('5')) {
              return false;
            }
          }
        }
        return failureCount < 3; // react-query default
      },
      useErrorBoundary: (error) => {
        return (
          axios.isAxiosError(error) &&
          !!error.response?.status.toString().startsWith('5')
        );
      },
    },
  },
});

export default queryClient;
