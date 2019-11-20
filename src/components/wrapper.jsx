import React from "react";
import { Section, Columns } from "bloomer";

const Wrapper = props => {
    return (
        <Section>
            <Columns>{props.children}</Columns>
        </Section>
    );
};

export default Wrapper;
