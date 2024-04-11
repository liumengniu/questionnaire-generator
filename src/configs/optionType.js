/**
 * description：
 * @author Kevin
 * @date 2024/3/16
 * Last edited on: 2024/3/16
 */

const optionList = {
  basic: [
    { id: 1, text: '单选' },
    { id: 2, text: '多选' },
    { id: 3, text: '文本输入' },
    { id: 4, text: '数字输入' },
    { id: 5, text: '文本域' },
    { id: 6, text: '日期' },
    { id: 7, text: '时间' },
    { id: 8, text: '评分' },
    { id: 9, text: '上传文件' },
    { id: 10, text: '电子签名' }
  ],
  commonlyUsed: [
    { id: 101, text: '姓名' },
    { id: 102, text: '性别' },
	  { id: 103, text: '手机号' },
	  { id: 104, text: '地址' }
  ],
  builtInTemplates: [
    { id: 201, text: '年收入' },
	  { id: 202, text: '衣服尺码' },
  ]
}

export default optionList
