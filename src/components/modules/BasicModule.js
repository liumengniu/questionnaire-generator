/**
 * 基础展示组件
 * @author Kevin
 * @Date: 2024-4-11
 */
import ItemTopic from "@comp/ItemTopic";
import TextArea from "antd/es/input/TextArea";
import ItemOperate from "@comp/ItemOperate";
import {DatePicker, Input, InputNumber, Rate, TimePicker} from "antd";

function BasicComponent(props) {
	
	const {type, handleTitle, addChildItem, removeItem} = props
	
	const ExhibitComponent = () => {
		if (type === "input") {
			return <Input placeholder="请输入内容" disabled={true}/>
		} else if (type === 'inputNumber') {
			return <InputNumber min={1} max={10} defaultValue={3} style={{width: "100%"}} disabled={true}/>
		} else if (type === 'textarea') {
			return <TextArea showCount maxLength={100} placeholder="请输入内容" disabled={true}/>
		} else if (type === 'datepicker') {
			return <DatePicker disabled={true}/>
		} else if (type === 'timepicker') {
			return <TimePicker disabled={true}/>
		} else if (type === 'rate') {
			return <Rate disabled={true}/>
		}  else {
			return null;
		}
	}
	
	return (
		<div className="item-content">
			<ItemTopic handleTitle={handleTitle} {...props}/>
			<ExhibitComponent />
			<ItemOperate addChildItem={addChildItem} removeItem={removeItem}/>
		</div>
	)
}

export default BasicComponent;
