import React from 'react';
import { Box } from '@adminjs/design-system'
import { CustomAvatar } from '../components/atoms';

const ImageCellComponent = ({ record, property }) => {
    return <Box data-css="default-dashboard" variant="container"><CustomAvatar record={record} property={property?.name} size={100} /></Box>
};

export default ImageCellComponent;
