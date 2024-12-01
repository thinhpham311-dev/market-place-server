import React from 'react';
import { Box, Header, Button } from '@adminjs/design-system';


export const Card = ({ children, title, buttonText, ...props }) => {
    return <Box data-css="default-dashboard" variant="container" >
        <Box flex flexDirection="row" >
            <Box flexGrow={1}>
                <Header.H4>{title}</Header.H4>
            </Box>
            <Box flexShrink={0}>
                <Button {...props} >{buttonText}</Button>
            </Box>
        </Box>
        <Box>
            {children}
        </Box>
    </Box>
};

