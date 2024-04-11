import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import _ from "lodash"
import mockData from "@configs/mock";

/**
 * @author Kevin
 * @Date: 2024-4-11
 */

function ItemOperate(props) {
	const {addChildItem, removeItem, type} = props;
	let item = _.find(mockData, o => o?.type === type);
	const hasAdd = !_.isEmpty(item) && !_.isEmpty(item?.options);
	
	
	return (
		<div className="item-operate">
			{
				hasAdd && <div onClick={addChildItem}>
					<PlusOutlined/>
					添加选项
				</div>
			}
			<div onClick={removeItem}>
				<MinusOutlined/>
				删除当前组件
			</div>
		</div>
	)
}

export default ItemOperate
