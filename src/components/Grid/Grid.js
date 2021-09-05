import React from 'react';

// Style
import { Wrapper, Content } from './Grid.styles';
import { PropTypes } from 'prop-types';

const Grid = ({header, children}) => (
    <Wrapper>
        <input type="text" placeholder={"Board title"} value={header} />
        <Content>
            {children}
        </Content>
    </Wrapper>
);

Grid.propTypes = {
    header: PropTypes.string
}

export default Grid;