import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

type Props = {
  floating?: boolean;
};

const Loading: React.FC<Props> = ({ floating }) => (
  <Wrapper>
    {floating ? (
      <FloatingCircularProgress color="primary" />
    ) : (
      <StyledCircularProgress color="primary" />
    )}
  </Wrapper>
);

export default Loading;

const Wrapper = styled.div`
  overflow: hidden; // as svg rotates, its square DOM element is taller at 45 degrees, causing issues with some scrollbars (e.g., modals with expanding bodies and conditional scrolling)
`;

const FloatingCircularProgress = styled(CircularProgress)`
  width: 100px !important;
  height: 100px !important;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
`;

const StyledCircularProgress = styled(CircularProgress)`
  display: block;
  margin: 0 auto;
`;
