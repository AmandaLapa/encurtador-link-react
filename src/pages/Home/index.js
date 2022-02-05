import { useState } from "react";
import React from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import LinkItem from "../../components/LinkItem/index.js";
import Menu from "../../components/menu";

import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";

const Home = ({ closeModal }) => {
	const [link, setLink] = useState("");
	const [data, setData] = useState({});
	const [showModal, setShowModal] = useState(false);

	async function handleShortLink() {
		//setShowModal(true);

		try {
			const response = await api.post("/shorten", {
				long_url: link,
			});

			setData(response.data);
			setShowModal(true);
			saveLink("@encurtaLink", response.data);
			setLink("");
		} catch {
			alert("Ops parece que algo deu errado!");
			setLink("");
		}
	}

	return (
		<div className="container-home">
			<div className="logo">
				<img src="/logo.png" alt="Sujeito link logo" />
				<h1>SujeitoLink</h1>
				<span>Cole seu link para encurtar ✌️</span>
			</div>

			<div className="area-input">
				<div>
					<FiLink size={24} color="#fff" />
					<input
						type="text"
						placeholder="Cole seu link aqui..."
						value={link}
						onChange={(event) => setLink(event.target.value)}
					/>
				</div>

				<button onClick={handleShortLink}>Encurtar Link</button>
			</div>

			<Menu />
			{showModal && (
				<LinkItem closeModal={() => setShowModal(false)} content={data} />
			)}
		</div>
	);
};

export default Home;
