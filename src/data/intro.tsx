export default {
  title: 'Feng Xuewei, Ph.D.',
  items: [
    {
      key: '1',  // 保证唯一就行
      label: 'email', // 标签名
      children: <a href="mailto:fengxw06@126.com">fengxw06@126.com</a>, // 支持 HTML 形式
      span:3, // 包含列的数量，用于控制是否占用单行等
      labelStyle: {}, // 用于控制 label 样式
      contentStyle: {} // 用于控制 children 样式
    },
    {
      key: '2',
      label: 'research',
      children: "Network and Information Security",
    },
  ]
}
