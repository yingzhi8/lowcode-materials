import snippets from './snippets';

export default {
  snippets,
  componentName: 'Card',
  group: 'Ant Design',
  title: '卡片',
  category: '数据展示',
  props: [
    {
      name: 'title',
      title: { label: '卡片标题', tip: '卡片标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    // {
    //   name: 'actions',
    //   title: { label: '卡片操作组', tip: '卡片操作组，位置在卡片底部' },
    //   propType: { type: 'arrayOf', value: 'node' },
    // },
    // {
    //   name: 'headStyle',
    //   title: { label: '标题区域样式', tip: '自定义标题区域样式' },
    //   propType: 'object',
    // },
    // {
    //   name: 'bodyStyle',
    //   title: { label: '内容区域样式', tip: '内容区域自定义样式' },
    //   propType: 'object',
    // },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'cover',
      title: { label: '卡片封面', tip: '卡片封面' },
      propType: 'node',
    },
    {
      name: 'extra',
      title: { label: '额外元素', tip: '卡片右上角的操作区域' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'hoverable',
      title: { label: '可浮起', tip: '鼠标移过时可浮起' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'loading',
      title: {
        label: 'loading',
        tip: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: 'card 的尺寸' },
      propType: { type: 'oneOf', value: ['default', 'small'] },
      defaultValue: 'default',
    },
    {
      name: 'type',
      title: { label: '卡片类型', tip: '卡片类型' },
      propType: { type: 'oneOf', value: ['default', 'inner'] },
      defaultValue: 'default',
    },
    {
      name: 'headerStyle',
      title: '头部样式',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'headerStyle',
          title: {
            label: '样式设置',
            tip: 'headerStyle | 用于设置卡片头部的样式',
          },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
    {
      name: 'bodyStyle',
      title: '内容样式',
      type: 'group',
      extraProps: {
        display: 'entry',
      },
      items: [
        {
          name: 'bodyStyle',
          title: {
            label: '样式设置',
            tip: 'bodyStyle | 可用于设置卡片内容部分的样式',
          },
          setter: 'StyleSetter',
          extraProps: {
            display: 'block',
          },
        },
      ],
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onTabChange',
          template:
            "onTabChange(key,${extParams}){\n// 页签切换的回调\nconsole.log('onTabChange', key);}",
        },
      ],
    },
  },
};
