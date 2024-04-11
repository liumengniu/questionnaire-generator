import ItemTopic from "@comp/ItemTopic";
import ItemOperate from "@comp/ItemOperate";

/**
 * 电子签名
 * @author Kevin
 * @Date: 2024-4-11
 */

function SignatureModule(props) {
	const {handleTitle, idx, text, addChildItem, removeItem, type} = props;
	
	return (
		<div className="item-content">
			<ItemTopic handleTitle={handleTitle} idx={idx} text={text}/>
			<div className="item-electronic-signature-group">
				填写签名
			</div>
			<ItemOperate addChildItem={addChildItem} removeItem={removeItem} type={type}/>
		</div>
	)
}

export default SignatureModule
