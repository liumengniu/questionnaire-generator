import ItemTopic from "@comp/ItemTopic";
import {DeleteOutlined} from "@ant-design/icons";
import ItemOperate from "@comp/ItemOperate";

/**
 * @author Kevin
 * @Date: 2024-4-11
 */

function RadioModule(props) {
	const {
		handleTitle,
		item,
		handleChildItemCompBlur,
		handleChildItemDelete,
		addChildItem,
		removeItem,
		idx,
		text,
		type,
		multiple
	} = props;
	
	return (
		<div className="item-content">
			<ItemTopic handleTitle={handleTitle} idx={idx} text={text}/>
			<div className="item-radio-group">
				{
					item?.options?.map((childItem, childIdx) => {
						return (
							<div className={`${item?.activeIdx === childIdx ? 'active' : '',multiple ? 'item-checkbox' : ''} item-radio-group-item`} key={childIdx}>
								<div/>
								<div className="item-radio-group-item-content">
									<div suppressContentEditableWarning contentEditable={true} className="radio-item" placeholder="请输入"
									     onBlur={e => handleChildItemCompBlur(e, idx, childIdx)}>
										{childItem?.label}
									</div>
									<DeleteOutlined twoToneColor="red" className="icon-del"
									                onClick={(e, idx) => handleChildItemDelete(e, idx, childIdx)}/>
								</div>
							</div>
						)
					})
				}
			</div>
			<ItemOperate addChildItem={addChildItem} removeItem={removeItem} type={type}/>
		</div>
	)
}

export default RadioModule
