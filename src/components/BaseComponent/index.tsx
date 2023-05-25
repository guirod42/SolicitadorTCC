import React, { forwardRef, useState } from 'react';
import {
    Container
} from "./styles";

const BaseComponent = forwardRef((props: any, ref) => {
    return (
        <Container/>
        );
});

export default BaseComponent;