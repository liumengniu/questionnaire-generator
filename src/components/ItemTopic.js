/**
 * @author Kevin
 * @Date: 2024-4-11
 */

function ItemTopic({handleTitle, idx, text}){
	return (
		<div className="item-topic" suppressContentEditableWarning
		     contentEditable={true} onBlur={e => handleTitle(e, idx)}>{`${idx + 1}、${text}`}
		</div>
	)
}

export default ItemTopic
