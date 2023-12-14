import React, { Component, createRef } from 'react';
import { Menu as OriginalMenu } from 'antd';

import { withSingleFunctionChild } from '../../utils/hoc';

class Menu extends Component<any, any> {
  menuRef = createRef<any>();

  componentDidUpdate(prevProps: any) {
    //TODO
  }

  componentDidMount() {
    //TODO
  }

  render() {
    console.log("Menu Render", this.props)
    return <OriginalMenu ref={this.menuRef} {...this.props} />;
  }
}

(Menu as any).Item = (props: any) => {
    console.log("Menu Render item", this.props)
  return (
    <OriginalMenu.Item
      {...props}
    >
    </OriginalMenu.Item>
  );
};

(Menu as any).SubMenu = withSingleFunctionChild(OriginalMenu.SubMenu);
(Menu as any).ItemGroup = withSingleFunctionChild(OriginalMenu.ItemGroup);

export default Menu;
