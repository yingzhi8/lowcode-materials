import snippets from './snippets';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export default {
  snippets,
  componentName: 'ZlibCol',
  group: 'Ant Design',
  title: '栅格-列(ZLib)',
  category: '布局',
  props: [
    {
      name: 'flex',
      title: { label: 'flex布局', tip: 'flex布局配置' },
      propType: 'string',
      setter: 'StringSetter'
    }
  ],
  configure: {
    component: { isContainer: true, nestingRule: { parentWhitelist: ['ZlibRow'] } },
    supports: { style: true }
  },
};
