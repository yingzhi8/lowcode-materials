import snippets from './snippets';

export default {
  group: 'FusionUI',
  componentName: 'Range',
  title: '区段选择器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Range',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'className',
      propType: 'string',
      description: '自定义类名',
    },
    {
      name: 'style',
      propType: 'object',
      description: '自定义内敛样式',
    },
    {
      name: 'id',
      propType: 'string',
    },
    {
      name: 'name',
      propType: 'string',
      description: 'name',
    },
    {
      name: 'value',
      propType: 'number',
      description: '分值',
    },
    {
      name: 'slider',
      title: {
        label: '滑块个数',
        tip: '滑块个数: 单个, 两个',
      },
      propType: {
        type: 'oneOf',
        value: ['single', 'double'],
      },
      description: '滑块个数\n@enumdesc 单个, 两个',
      defaultValue: 'single',
    },
    {
      name: 'min',
      title: {
        label: '最小值',
      },
      propType: 'number',
      description: '最小值',
      defaultValue: 0,
    },
    {
      name: 'max',
      title: {
        label: '最大值',
      },
      propType: 'number',
      description: '最大值',
      defaultValue: 100,
    },
    {
      name: 'step',
      title: {
        label: '步长',
        tip: '步长，取值必须大于 0，并且可被 (max - min) 整除。',
      },
      propType: 'number',
      description: '步长，取值必须大于 0，并且可被 (max - min) 整除。',
      defaultValue: 1,
    },
    {
      name: 'marksPosition',
      title: {
        label: 'Marks 位置',
        tip: "marksPosition|marks显示在上方('above')or下方('below')",
      },
      propType: {
        type: 'oneOf',
        value: ['above', 'below'],
      },
      description: "marks显示在上方('above')or下方('below')",
      defaultValue: 'above',
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '值为 `true` 时，滑块为禁用状态',
      defaultValue: false,
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '当 Range 的值发生改变后，会触发 onChange 事件，并把改变后的值作为参数传入, 如果设置了value, 要配合此函数做受控使用\n@param {String/number} value',
    },
    {
      name: 'onProcess',
      propType: 'func',
      description:
        '滑块拖动的时候触发的事件,不建议在这里setState, 一般情况下不需要用, 滑动时有特殊需求时使用\n@param {String/number} value',
    },
    {
      name: 'hasTip',
      title: {
        label: '是否显示 tip',
        tip: 'hasTip',
      },
      propType: 'bool',
      description: '是否显示 tip',
      defaultValue: true,
    },
    {
      name: 'reverse',
      title: {
        label: '选中态反转',
        tip: 'reverse',
      },
      propType: 'bool',
      description: '选中态反转',
      defaultValue: false,
    },
    {
      name: 'pure',
      propType: 'bool',
      description: '是否pure render',
      defaultValue: false,
    },
    {
      name: 'fixedWidth',
      propType: 'bool',
      description: '是否为拖动线段类型,默认slider为double, defaultValue必传且指定区间',
      defaultValue: false,
    },
    {
      name: 'tooltipVisible',
      propType: 'bool',
      description: 'tooltip是否默认展示',
      defaultValue: false,
    },
    {
      name: 'isPreview',
      propType: 'bool',
      description: '是否为预览态',
      defaultValue: false,
    },
  ],
  configure: {
    props: [
      {
        name: 'value',
        title: '当前值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'defaultValue',
        title: '默认值',
        setter: ['NumberSetter', 'ExpressionSetter'],
      },
      {
        name: 'min',
        title: {
          label: '最小值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        description: '最小值',
        defaultValue: 0,
      },
      {
        name: 'max',
        title: {
          label: '最大值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        description: '最大值',
        defaultValue: 100,
      },
      {
        name: 'step',
        title: {
          label: '步长',
          tip: '步长，取值必须大于 0，并且可被 (max - min) 整除。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        description: '步长，取值必须大于 0，并且可被 (max - min) 整除。',
        defaultValue: 1,
      },
      {
        name: 'slider',
        title: {
          label: '滑块个数',
          tip: '滑块个数: 单个, 两个',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: { options: ['single', 'double'] },
        },
        description: '滑块个数\n@enumdesc 单个, 两个',
        defaultValue: 'single',
      },
      {
        name: 'marksPosition',
        title: {
          label: 'Marks 位置',
          tip: "marksPosition|marks显示在上方('above')or下方('below')",
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: { options: ['above', 'below'] },
        },
        description: "marks显示在上方('above')or下方('below')",
        defaultValue: 'above',
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
        supportVariable: true,
        description: '值为 `true` 时，滑块为禁用状态',
        defaultValue: false,
      },
      {
        name: 'hasTip',
        title: {
          label: '显示 Tip',
          tip: 'hasTip',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否显示 tip',
        defaultValue: true,
      },
      {
        name: 'fixedWidth',
        title: '固定宽度',
        setter: 'BoolSetter',
        supportVariable: true,
        description: '是否为拖动线段类型,默认slider为double, defaultValue必传且指定区间',
        defaultValue: false,
      },
      {
        name: 'tooltipVisible',
        display: 'block',
        setter: 'BoolSetter',
        supportVariable: true,
        title: 'tooltip是否默认展示',
        defaultValue: false,
      },
      {
        name: 'reverse',
        display: 'block',
        title: {
          label: '选中态反转',
          tip: 'reverse',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        description: '选中态反转',
        defaultValue: false,
      },
      {
        name: 'isPreview',
        display: 'block',
        setter: 'BoolSetter',
        supportVariable: true,
        title: '是否为预览态',
        defaultValue: false,
      },
      {
        type: 'group',
        title: '高级',
        display: 'block',
        items: [
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
          {
            name: 'name',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '表单标识',
                en_US: 'Name',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: name | 说明: 表单标识',
                en_US: 'prop: name | description: switch name',
              },
            },
            setter: 'StringSetter',
            supportVariable: true,
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: ['onChange'],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};