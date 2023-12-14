import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { Col } from 'antd';

const ZibCol = React.forwardRef((props, ref) => {
    return (
        <Col {...props} ref={ref}>
            {props.children}
        </Col>
    );
})

export default ZibCol;
