import React from 'react';

// Styles
import { Wrapper, Content, LogoImg } from './Header.styles';

// Image
import logo from '../../images/logo.png';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={logo} alt="Take Note!" />
        </Content>
    </Wrapper>
);

export default Header;