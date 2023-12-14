import { uuid } from '../_utils/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Timeline',
  group: 'Ant Design',
  title: '时间轴',
  category: '数据展示',
  props: [
    {
      name: 'steps',
      title: '步骤配置',
      propType: { type: 'arrayOf', value: 'any' },
      setter: ['JsonSetter', 'VariableSetter']
    },
    {
      name: 'renderDot',
      title: {
        label: '轴点渲染',
        tip: 'renderDot | 当使用 steps 时，可以用 `renderContent` 自定义渲染时间轴点',
      },
      propType: 'func',
      setter: [
        {
          componentName: 'SlotSetter',
          title: '渲染函数插槽',
          initialValue: {
            type: 'JSSlot',
            params: ['item'],
            value: [],
          },
        },
        {
          componentName: 'FunctionSetter',
          props: {
            template: 'renderDot(item,${extParams}){\n// 自定义渲染时间轴点\nreturn `item`;\n}',
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'renderContent',
      title: {
        label: '内容渲染',
        tip: 'renderItem | 当使用 steps 时，可以用 `renderContent` 自定义渲染时间轴项',
      },
      propType: 'func',
      setter: [
        {
          componentName: 'SlotSetter',
          title: '渲染函数插槽',
          initialValue: {
            type: 'JSSlot',
            params: ['item'],
            value: [],
          },
        },
        {
          componentName: 'FunctionSetter',
          props: {
            template: 'renderContent(item,${extParams}){\n// 自定义渲染时间轴项\nreturn `item`;\n}',
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'mode',
      title: {
        label: '模式',
        tip: '通过设置 `mode` 可以改变时间轴和内容的相对位置',
      },
      propType: { type: 'oneOf', value: ['left', 'alternate', 'right'] },
    },
    {
      name: 'pending',
      title: {
        label: '最后节点',
        tip: '指定最后一个幽灵节点是否存在',
      },
      propType: 'bool',
    },
    {
      name: 'pendingDot',
      title: {
        label: '时间图点',
        tip: '当最后一个幽灵节点存在時，指定其时间图点',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'reverse',
      title: { label: '节点排序', tip: '节点排序' },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: { supports: { style: true } },
};
