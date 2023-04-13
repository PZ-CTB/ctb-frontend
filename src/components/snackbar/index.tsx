import { useSnackbar, OptionsObject } from 'notistack';
export const useSnackbars = () => {
  const { enqueueSnackbar } = useSnackbar();

  const enqueueSnackbarError = (message: string) => {
    return enqueueSnackbar(message, {
      variant: 'error',
      ...sharedOptions,
    });
  };
  const enqueueSnackbarSuccess = (message: string) => {
    return enqueueSnackbar(message, {
      variant: 'success',
      ...sharedOptions,
    });
  };
  return { enqueueSnackbarError, enqueueSnackbarSuccess };
};
const sharedOptions: OptionsObject = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};
