import snippets from './snippets';

export default {
  snippets,
  componentName: 'ZlibRow',
  group: 'Ant Design',
  title: '栅格-行(ZLib)',
  category: '布局',
  props: [
    {
      name: 'align',
      title: { label: '垂直对齐', tip: '垂直对齐' },
      propType: { type: 'oneOf', value: ['top', 'middle', 'bottom'] },
    },
    {
      name: 'h-gutter',
      title: {
        label: '水平间隔',
        tip: '栅格水平间隔，单位为像素(px)',
      },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
        },
      },
      defaultValue: 0,
      extraProps: {
        getValue(target) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (typeof gutter === 'number') {
            return gutter;
          } else if (Array.isArray(gutter)) {
            return gutter[0];
          }
          return 0;
        },
        setValue(target, value) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (Array.isArray(gutter)) {
            gutter[0] = value;
            node.setPropValue('gutter', gutter);
          } else {
            node.setPropValue('gutter', [value, 0]);
          }
        },
      },
    },
    {
      name: 'v-gutter',
      title: {
        label: '垂直间隔',
        tip: '栅格垂直间隔，单位为像素(px)',
      },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
        },
      },
      defaultValue: 0,
      extraProps: {
        getValue(target) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (typeof gutter === 'number') {
            return 0;
          } else if (Array.isArray(gutter)) {
            return gutter[1];
          }
          return 0;
        },
        setValue(target, value) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (Array.isArray(gutter)) {
            gutter[1] = value;
            node.setPropValue('gutter', gutter);
          } else {
            node.setPropValue('gutter', [gutter, value]);
          }
        },
      },
    },
    {
      name: 'justify',
      title: { label: '水平排列', tip: '水平排列' },
      propType: {
        type: 'oneOf',
        value: ['start', 'end', 'center', 'space-around', 'space-between'],
      },
    },
    {
      name: 'wrap',
      title: { label: '自动换行', tip: '是否自动换行' },
      propType: 'bool',
      defaultValue: true,
    },
  ],
  configure: {
    component: { isContainer: true, nestingRule: { childWhitelist: ['ZlibCol'] } },
    supports: { style: true },
  },
};
