import snippets from './snippets';
import { AntdIconSetter } from '../_setters';

export default {
  snippets,
  componentName: 'ZlibMenu',
  group: 'Ant Design',
  title: '导航组件(ZLib)',
  category: '导航',
  props: [
    {
      name: 'menuItems',
      title: {
        label: '菜单数据',
        tip: 'menuItems 数据，如果设置则不需要手动构造 menuItem 节点（key 在整个菜单范围内唯一）',
      },
      propType: { type: 'arrayOf', value: 'object' },
      setter: 'JsonSetter',
      defaultValue: [{
          "key": "m001",
          "label": "菜单项1",
          "children": [{
              "key": "m0101",
              "label": "菜单项1-1"
          }, {
              "key": "m0102",
              "label": "菜单项1-2"
          }]
      }, {
          "key": "m002",
          "label": "菜单项2",
          "children": [{
              "key": "m0201",
              "label": "菜单项2-1"
          }, {
              "key": "m0202",
              "label": "菜单项2-2"
          }]
      }]
    },
    {
      name: 'mode',
      title: {
        label: '菜单类型',
        tip: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
      },
      propType: { type: 'oneOf', value: ['inline', 'vertical', 'horizontal'] },
      defaultValue: 'inline',
    },
    {
      name: 'triggerSubMenuAction',
      title: {
        label: '触发方式',
        tip: '展开/关闭的触发行为',
      },
      propType: { type: 'oneOf', value: ['hover', 'click'] },
      defaultValue: 'hover',
    },
    {
      name: 'expandRoot',
      title: { label: '展开首层', tip: '展开首层' },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    },
    {
      name: 'selectable',
      title: { label: '允许选中', tip: '允许选中' },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: true
    },
    {
      name: 'defaultSelectedOne',
      title: { label: '默认选中', tip: '默认选中的菜单项key值' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'style',
      title: { label: '菜单样式', tip: '菜单样式' },
      propType: 'object',
    },
    {
      name: 'theme',
      title: { label: '主题颜色', tip: '主题颜色' },
      propType: { type: 'oneOf', value: ['light', 'dark'] },
    },
    {
      title: '默认父节点图标',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultParentIconType',
          title: '图标选择',
          propType: 'string',
          setter: AntdIconSetter,
          defaultValue: "FolderOutlined",
        },
        {
          name: 'defaultParentIconSize',
          title: '图标大小',
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 20,
        }
      ]
    },
    {
      title: '默认叶节点图标',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultBeafIconType',
          title: '图标选择',
          propType: 'string',
          setter: AntdIconSetter,
          defaultValue: "FileTextOutlined",
        },
        {
          name: 'defaultBeafIconSize',
          title: '图标大小',
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 20,
        }
      ]
    }
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          template:
            "onClick({item,key,keyPath,domEvent},${extParams}){\n// 点击 MenuItem 调用此函数\nconsole.log('onClick',item,key,keyPath,domEvent);}",
        },
        {
          name: 'onDeselect',
          template:
            "onDeselect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 取消选中时调用，仅在 multiple 生效\nconsole.log('onDeselect',item,key,keyPath,selectedKeys,domEvent);}",
        },
        {
          name: 'onOpenChange',
          template:
            "onOpenChange(openKeys,${extParams}){\n// SubMenu 展开/关闭的回调\nconsole.log('onOpenChange',openKeys);}",
        },
        {
          name: 'onSelect',
          template:
            "onSelect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 被选中时调用\nconsole.log('onSelect',item,key,keyPath,selectedKeys,domEvent);}",
        },
      ],
    },
  },
};
