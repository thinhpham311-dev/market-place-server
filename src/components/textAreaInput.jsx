import React from 'react';
import { Box, TextArea, Label } from '@adminjs/design-system'
import { styled } from '@adminjs/design-system/styled-components';

const TextAreaInputWrapper = styled(Box)`
    margin-bottom: 50px;
`;


const TextAreaInputComponent = ({ record, property, onChange }) => {

    return <TextAreaInputWrapper width={1} >
        <Label
            size="default"
            variant="default"
        >
            {property.label}
        </Label>
        <TextArea id="comment" placeholder="Comment..." value={record.params[property.path] || ''} onChange={(e) => onChange(property.path, e.target.value)} width={1} />
    </TextAreaInputWrapper>
}




export default TextAreaInputComponent;
