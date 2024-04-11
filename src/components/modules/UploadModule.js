import ItemTopic from "@comp/ItemTopic";
import {InboxOutlined} from "@ant-design/icons";
import {Upload} from "antd";
import ItemOperate from "@comp/ItemOperate";

const {Dragger} = Upload;

/**
 * 上传组件
 * @author Kevin
 * @Date: 2024-4-11
 */

function UploadModule(props){
	const { handleTitle, idx, text, addChildItem, removeItem, type } = props;
	
	return (
		<div className="item-content">
			<ItemTopic handleTitle={handleTitle} idx={idx} text={text}/>
			<Dragger disabled={true}>
				<p className="ant-upload-drag-icon">
					<InboxOutlined/>
				</p>
				<p className="ant-upload-text">点击或拖拽文件至此区域即可上传</p>
				<p className="ant-upload-hint">
					支持单次或批量上传. 禁止上传公司数据或其他重要文件
				</p>
			</Dragger>
			<ItemOperate addChildItem={addChildItem} removeItem={removeItem} type={type}/>
		</div>
	)
}

export default UploadModule
