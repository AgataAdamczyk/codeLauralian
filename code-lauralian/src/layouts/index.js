import React from 'react';
import GlobalStyle from 'assets/styles/globalStyles';
import Navigation from 'components/Navigation/Navigation';
import PropTypes from 'prop-types';
import Footer from 'components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navigation />
        {children}
      <Footer />
    </>
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainLayout;
