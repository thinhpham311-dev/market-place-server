import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Header } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';

const Heading6 = styled(Header.H6)`
    font-weight: bold;
    padding: 0;
`

export const CustomTable = ({ data, columns }) => {

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((col, idx) => (
                        <TableCell key={idx} style={col.style}>
                            <Heading6>{col.label}</Heading6>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((col, cellIndex) => (
                            <TableCell key={cellIndex} style={col.style}>
                                {row[col.key]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
