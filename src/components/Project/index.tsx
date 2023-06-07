import React, { forwardRef } from 'react';
import { projectInterface } from './../../interface/projectInterface'
import {
    Container
} from "./styles";


const Project = forwardRef((props: projectInterface, ref) => {
    return (
        <Container />
    );
});

export default Project;