import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';

const Layout = ({children}) => {
    return (
        <StLayout>
            {children}
        </StLayout>
    );
};

export default Layout;


const StLayout = styled.div`
    width : 821px;
    margin: auto;
`