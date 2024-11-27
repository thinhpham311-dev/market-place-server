import React from 'react';
import { Text, Avatar } from '@adminjs/design-system';

export const CustomAvatar = ({ record, property, size = '100px' }) => {
    // Assuming the image URL is stored in the record properties
    const imageUrl = record.params[property];

    const avatarStyle = {
        width: size,
        height: size,
        objectFit: 'cover', // Ensures the image covers the avatar area, maintaining aspect ratio
    };

    return (
        <>
            {
                imageUrl ? (
                    <Avatar
                        alt="Bubble Avatar"
                        src={imageUrl}
                        style={avatarStyle}
                    />
                ) : (
                    <Text>No image available</Text>
                )
            }
        </>

    );
};

