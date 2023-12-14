import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { Row } from 'antd';

const ZibRow = React.forwardRef((props, ref) => {
    return (
        <Row {...props} ref={ref}>
            {props.children}
        </Row>
    );
})

export default ZibRow;
