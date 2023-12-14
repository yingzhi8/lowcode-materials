import snippets from './snippets';

export default {
  snippets,
  componentName: 'Space',
  group: 'Ant Design',
  title: '间距',
  category: '布局',
  props: [
    {
      name: 'align',
      title: { label: '对齐方式', tip: '对齐方式' },
      propType: {
        type: 'oneOf',
        value: ['start', 'end', 'center', 'baseline'],
      },
    },
    {
      name: 'direction',
      title: { label: '间距方向', tip: '间距方向' },
      propType: { type: 'oneOf', value: ['vertical', 'horizontal'] },
    },
    {
      name: 'size',
      title: { label: '间距大小', tip: '间距大小' },
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'oneOf',
            value: ['small', 'middle', 'large'],
          },
          'number',
        ],
      },
      defaultValue: 'middle',
    },
    {
      name: 'split',
      title: { label: '分隔组件', tip: '自定义分隔符' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
      setter: [
        'StringSetter',
        {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'wrap',
      title: { label: '自动换行', tip: '自动换行' },
      propType: 'bool',
    }    
  ],
  configure: { component: { isContainer: true }, supports: { style: true } },
};
