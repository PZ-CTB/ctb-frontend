import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RemoveIcon from '@mui/icons-material/Remove';
import { Chip, IconButton, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import styled from 'styled-components';

import NumberInput from 'components/form/numberInput';
import { formatUSD } from 'utils/number';

import { WalletTradeType } from '../../../const';
import { WalletBalance } from '../../../types';

type Props = {
  balance: WalletBalance;
  btcPrice: number;
};

const WalletTradeFormFields: React.FC<Props> = ({ balance, btcPrice }) => {
  const {
    control,
    setValue,
    trigger,
    formState: { defaultValues },
    getValues,
  } = useFormContext();

  const tradeType = useWatch({ control, name: 'tradeType' });
  const btc = useWatch({ control, name: 'btc' });
  const usd = useWatch({ control, name: 'usd' });

  // trigger validation
  useEffect(() => {
    if (!_.isEqual(getValues(), defaultValues)) trigger();
  }, [usd, btc, tradeType]);

  // set btc value based on usd input
  useEffect(() => {
    if (usd !== '') setValue('btc', _.round(usd / btcPrice, 8));
    else {
      setValue('btc', '');
    }
  }, [usd]);

  // set usd value based on btc input
  useEffect(() => {
    if (btc !== '') setValue('usd', _.round(btc * btcPrice, 2));
    else {
      setValue('usd', '');
    }
  }, [btc]);

  const handleChangeTradeType = () => {
    if (tradeType === WalletTradeType.BUY)
      setValue('tradeType', WalletTradeType.SELL);

    if (tradeType === WalletTradeType.SELL)
      setValue('tradeType', WalletTradeType.BUY);
  };

  const handleBtcBalanceClick = () => {
    if (btc !== balance.wallet_btc)
      setValue('btc', _.round(balance.wallet_btc, 8));
  };

  const handleUsdBalanceClick = () => {
    const usd_balance = _.round(balance.wallet_usd, 2);

    if (usd !== usd_balance) setValue('usd', usd_balance);
  };

  return (
    <Container>
      1₿ = {formatUSD(btcPrice)}
      <FieldsContainer>
        <NumberInput
          name="btc"
          label="BTC ₿"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {tradeType === WalletTradeType.BUY && <AddIcon />}
                {tradeType === WalletTradeType.SELL && <RemoveIcon />}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Chip
                  onClick={handleBtcBalanceClick}
                  label={`${_.round(balance.wallet_btc, 8)} ₿`}
                  variant="outlined"
                />
              </InputAdornment>
            ),
          }}
        />
        <TradeTypeButton color="primary" onClick={handleChangeTradeType}>
          {tradeType === WalletTradeType.BUY && (
            <KeyboardArrowLeftIcon color="primary" />
          )}
          {tradeType === WalletTradeType.SELL && <KeyboardArrowRightIcon />}
        </TradeTypeButton>
        <NumberInput
          name="usd"
          label="USD $"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {tradeType === WalletTradeType.BUY && <RemoveIcon />}
                {tradeType === WalletTradeType.SELL && <AddIcon />}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Chip
                  onClick={handleUsdBalanceClick}
                  label={formatUSD(balance.wallet_usd)}
                  variant="outlined"
                />
              </InputAdornment>
            ),
          }}
        />
      </FieldsContainer>
      <SubmitButton disabled={!(usd > 0.01)}>{tradeType}</SubmitButton>
    </Container>
  );
};

export default WalletTradeFormFields;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const FieldsContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 3rem;

  .MuiInputBase-root {
    width: 20rem;
  }
`;

const TradeTypeButton = styled(IconButton)`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  width: 3.5rem;
  height: 3.5rem;
`;

const SubmitButton = styled(Button).attrs(() => ({
  type: 'submit',
  variant: 'contained',
  size: 'large',
  fullWidth: true,
}))`
  max-width: 15rem;
`;
