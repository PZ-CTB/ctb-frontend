import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import _ from 'lodash';
import React from 'react';
import { useForm } from 'react-hook-form';

import Form from 'components/form';
import Loading from 'components/ui/loading';
import { useSnackbars } from 'snackbar';
import { useStockPrice } from 'stock/rquery';
import { formatUSD } from 'utils/number';

import { WalletTradeType } from '../../../const';
import { useWalletBalance } from '../../../rquery';
import { walletBuyService, walletSellService } from '../../../service';
import { ApiPostWalletData, WalletTradeFormData } from '../../../types';
import { getWalletTradeFormDefaultValues } from '../../../utils';
import { getWalletTradeFormSchema } from '../schema';

import WalletTradeFormFields from './fields';

const WalletTradeForm: React.FC = () => {
  const walletBalanceQuery = useWalletBalance();
  const stockPriceQuery = useStockPrice();
  const { enqueueSnackbarError, enqueueSnackbarSuccess } = useSnackbars();

  const methods = useForm<WalletTradeFormData>({
    defaultValues: getWalletTradeFormDefaultValues(),
    resolver: zodResolver(
      getWalletTradeFormSchema(
        walletBalanceQuery.data,
        stockPriceQuery.data?.price
      )
    ),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data: WalletTradeFormData) => {
    const postData = {
      amount: _.round(data.btc, 8),
    } satisfies ApiPostWalletData;

    if (data.tradeType === WalletTradeType.BUY) {
      walletBuyService(postData)
        .then(() => {
          enqueueSnackbarSuccess(
            `You bought ${data.btc} ₿ for ${formatUSD(data.usd)}`
          );
        })
        .catch(() => {
          enqueueSnackbarError('Something went wrong');
        });
    }

    if (data.tradeType === WalletTradeType.SELL) {
      walletSellService(postData)
        .then(() => {
          enqueueSnackbarSuccess(
            `You sold ${data.btc} ₿ for ${formatUSD(data.usd)}`
          );
        })
        .catch(() => {
          enqueueSnackbarError('Something went wrong');
        });
    }

    methods.reset();
  });

  if (walletBalanceQuery.isLoading || stockPriceQuery.isLoading)
    return <Loading />;

  if (!walletBalanceQuery.data || !stockPriceQuery.data) return null;

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <WalletTradeFormFields
        balance={walletBalanceQuery.data}
        btcPrice={stockPriceQuery.data.price}
      />
    </Form>
  );
};

export default WalletTradeForm;
