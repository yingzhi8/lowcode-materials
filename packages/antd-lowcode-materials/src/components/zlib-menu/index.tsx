import * as icons from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

const createFromIconfontCN = icons.createFromIconfontCN;

const Icon = (props: IconProps, ref: Ref<any>) => {
    const { type = '', size, color, ...rest } = props;
  
    const IconComp = ((icons || {}) as any)[type];
  
    const style = {
      ...rest.style,
      fontSize: size,
      color,
    };
  
    if (!IconComp) {
      const IconFont = createFromIconfontCN();
      return <IconFont type={type} {...rest} style={style} ref={ref} />;
    }
  
    return <IconComp {...rest} style={style} twoToneColor={color} ref={ref} />;
};

function getMenuItem(menuItem, parentIcon, parentSize, beafIcon, beafSize, level = 1) {
    let _menuItem = { ...menuItem }
    _menuItem.children = null;

    if(menuItem.icon) {
        _menuItem.icon = (<Icon type={menuItem.icon} />)
    } else if((menuItem.children && menuItem.children.length) && parentIcon) {
        _menuItem.icon = (<Icon type={parentIcon} size={parentSize} />)
    } else if(beafIcon) {
        _menuItem.icon = (<Icon type={beafIcon} size={beafSize} />)
    }

    if(menuItem.children && menuItem.children.length > 0) {
        _menuItem.children = [];

        for(let subItem of menuItem.children) {
            _menuItem.children.push(getMenuItem(subItem, parentIcon, parentSize, beafIcon, beafSize, level + 1));
        }
    }

    return _menuItem;
}

const ZibMenu = React.forwardRef((props, ref) => {
    let menuItems = [];
    let rootKeys = [];

    if(props.menuItems) {
        for(let menuItem of props.menuItems) {
            rootKeys.push(menuItem.key)
            menuItems.push(
                getMenuItem(
                    menuItem, 
                    props.defaultParentIconType, 
                    props.defaultParentIconSize, 
                    props.defaultBeafIconType, 
                    props.defaultBeafIconSize
                )
            )
        }
    }
    
    return (
        <Menu
            {...props}
            defaultOpenKeys={rootKeys}
            defaultSelectedKeys={[props.defaultSelectedOne]}
            items={menuItems}
            ref={ref}
        />
    );
})

export default ZibMenu;
