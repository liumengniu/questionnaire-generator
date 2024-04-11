/**
 * description：
 * @author Kevin
 * @date 2024/3/16
 * Last edited on: 2024/3/16
 */
import {v4 as uuidV4} from 'uuid'

const mockData = {
	1: {
		id: uuidV4(),
		type: 'radio',
		text: "单选",
		options: [
			{id: 1, label: '答案1', value: '答案1'},
			{id: 2, label: '答案2', value: '答案2'},
			{id: 3, label: '答案3', value: '答案3'}
		]
	},
	2: {
		id: uuidV4(),
		type: 'checkbox',
		text: "多选",
		options: [
			{id: 1, label: '唱', value: '唱'},
			{id: 2, label: '跳', value: '跳'},
			{id: 3, label: 'rap', value: 'rap'},
			{id: 4, label: '篮球', value: '篮球'}
		]
	},
	3: {
		id: uuidV4(),
		type: 'input',
		text: "文本输入"
	},
	4: {
		id: uuidV4(),
		type: 'inputNumber',
		text: "数字输入"
	},
	5: {
		id: uuidV4(),
		type: 'textarea',
		text: "多行文本"
	},
	6: {
		id: uuidV4(),
		type: 'datepicker',
		text: "日期选择"
	},
	7: {
		id: uuidV4(),
		type: 'timepicker',
		text: "时间选择"
	},
	8: {
		id: uuidV4(),
		type: 'rate',
		text: "评分"
	},
	9: {
		id: uuidV4(),
		type: 'upload',
		text: "上传组件"
	},
	10: {
		id: uuidV4(),
		type: 'electronicSignature',
		text: "电子签名"
	},
	101: {
		id: uuidV4(),
		type: 'name',
		text: "姓名"
	},
	102: {
		id: uuidV4(),
		type: 'gender',
		text: "性别"
	},
	103: {
		id: uuidV4(),
		type: 'phone',
		text: "手机号"
	},
	104: {
		id: uuidV4(),
		type: 'address',
		text: "地址"
	},
	201: {
		id: uuidV4(),
		type: 'income',
		text: "年收入",
		options: [
			{id: 1, label: '0~10W', value: '0~10W'},
			{id: 2, label: '10~30W', value: '10~30W'},
			{id: 3, label: '30~50W', value: '30~50W'},
			{id: 3, label: '50~100W', value: '50~100W'},
			{id: 3, label: '100W以上', value: '100W以上'}
		]
	},
	202: {
		id: uuidV4(),
		type: 'clothes_size',
		text: "衣服尺码",
		options: [
			{id: 1, label: 'S码', value: 'S码'},
			{id: 1, label: 'M码', value: 'M码'},
			{id: 1, label: 'L码', value: 'L码'},
			{id: 1, label: 'XL码', value: 'XL码'},
			{id: 1, label: 'XXL码', value: 'XXL码'},
			{id: 1, label: 'XXXL码', value: 'XXXL码'},
		]
	}
}

export default mockData

