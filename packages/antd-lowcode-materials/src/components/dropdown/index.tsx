import React from 'react';
import { Dropdown as OriginalDropdown } from 'antd';
import { withWrap } from '../../utils/hoc';

const Dropdown: any = (props: any) => {
  const innerProps: any = {};
  if (props.__designMode === 'design') {
    // 低代码编辑态中强制显示，将控制权交给引擎侧
    innerProps.visible = true;
  }
  
  console.log("Dropdown", props)

  return (<OriginalDropdown {...props} {...innerProps}>
      <span>{props.children}</span>
    </OriginalDropdown>);
};

export default withWrap(Dropdown);
