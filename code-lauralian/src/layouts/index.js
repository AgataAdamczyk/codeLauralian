import React from 'react';
import GlobalStyle from 'assets/styles/globalStyles';
import Navigation from 'components/Navigation/Navigation';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
  </>
);

MainLayout.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainLayout;
