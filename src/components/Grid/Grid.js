import React from 'react';

// Style
import { Wrapper, Content } from './Grid.styles';

const Grid = ({header, img, children}) => (
    <Wrapper img={img}>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
);

export default Grid;