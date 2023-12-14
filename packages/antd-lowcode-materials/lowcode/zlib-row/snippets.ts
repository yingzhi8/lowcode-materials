export default [
  {
    title: '两栏(ZLib)',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1.png',
    schema: {
      componentName: 'ZlibRow',
      props: {},
      children: [
        {
          componentName: 'ZlibCol',
          props: {
            flex: "250px",
          },
        },
        {
          componentName: 'ZlibCol',
          props: {
            flex: "auto",
          },
        },
      ],
    },
  }
];
