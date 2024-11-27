import { styled } from '@adminjs/design-system/styled-components';
import { Box } from '@adminjs/design-system';

// Utility function to generate grid-column string for different breakpoints
const getWidthString = (span) => {
    if (!span) { return };
    return `grid-column: span ${span};`;  // Use 'span' directly
}

export const Row = styled(Box)`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr)); 
    ${({ gap }) => gap && `grid-gap: ${gap}px`}; 
    padding: 10px;
    width: 100%;
`;

export const Column = styled(Box)`
    padding: 0;
    ${({ xs }) => xs && getWidthString(xs)}; 
    
    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};  
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)}; 
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)}; 
    }
`;
