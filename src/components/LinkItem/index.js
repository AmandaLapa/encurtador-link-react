import React from "react";
import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

const LinkItem = ({ closeModal, content }) => {

	async function copyLink(){
  await  navigator.clipboard.writeText(content.link);
		alert('URL copiada com sucesso!')
	}

	return (
		<div className="modal-container">
			<div className="modal-header">
				<h2>Link Encurtado</h2>
				<button onClick={closeModal}>
					<FiX color="#000" size={28} />
				</button>
			</div>

			<span>{content.long_url}</span>
			<button className="modal-link" onClick={copyLink}>
				{content.link} <FiClipboard color="#fff" size={20} />
			</button>
		</div>
	);
};

export default LinkItem;
