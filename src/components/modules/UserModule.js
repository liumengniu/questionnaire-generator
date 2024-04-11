import {Cascader, DatePicker, Input, InputNumber, Rate, TimePicker} from "antd";
import TextArea from "antd/es/input/TextArea";
import ItemTopic from "@comp/ItemTopic";
import ItemOperate from "@comp/ItemOperate";

/**
 * @author Kevin
 * @Date: 2024-4-11
 */
function UserModule(props) {
	const {type, handleTitle, addChildItem, removeItem} = props
	
	const ExhibitComponent = () => {
		if (type === "name") {
			return <Input placeholder="请输入姓名" disabled={true}/>
		} else if (type === 'gender') {
			return (
				<div className="gender-group">
					<div>男</div>
					<div>女</div>
				</div>
			)
		} else if (type === 'phone') {
			return <Input placeholder="请输入11位手机号" disabled={true}/>
		} else if (type === 'address') {
			return <div className="item-address-group">
				<Cascader defaultValue={['湖南省', '长沙市', '岳麓区']} disabled={true}
				          style={{width: "100%", marginBottom: 10}}/>
				<Input placeholder="请输入详细地址" disabled={true}/>
			</div>
		} else {
			return null;
		}
	}
	
	return (
		<div className="item-content">
			<ItemTopic handleTitle={handleTitle} {...props}/>
			<ExhibitComponent/>
			<ItemOperate addChildItem={addChildItem} removeItem={removeItem}/>
		</div>
	)
}

export default UserModule
