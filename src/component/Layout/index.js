import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import 'normalize.css';
import '../../assets/css/main.css';

const Layout = ({children}) => (
    <>
        <Navigation/>
        {children}
        <Footer/>
    </>
);

export default Layout;