import React from 'react';
import GlobalStyle from 'assets/styles/globalStyles';
import Navigation from 'components/Navigation/Navigation';
import PropTypes from 'prop-types';
import Footer from 'components/Footer/Footer';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainLayout;
