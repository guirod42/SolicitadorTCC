import React, { forwardRef, useState } from 'react';
import {
    Container,
    PhotoSpace,
    Photo,
} from "./styles";

const Proposal = () => {
    let defaultImage: string = "https://sec.uniaraxa.edu.br/assets/lms/Pessoa/default.jpg";

    return (
        <Container>
            <PhotoSpace>
                <Photo source={{ uri: defaultImage }} />
            </PhotoSpace>
        </Container>
    );
};

export default Proposal;