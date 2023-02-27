/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { _Contacts } from "../Style";

export default function Contacts() {
	return (
		<div id="Contacts">
			<_Contacts>
				{/* <a href="/#" className="contactElement">
				Gmail
			</a> */}
				<a
					href="https://www.linkedin.com/in/jo%C3%A3o-bernardo-rebelo-621585171/"
					className="contactElement"
				>
					LinkedIn
				</a>
				<a href="https://github.com/JBernardoRebelo" className="contactElement">
					GitHub
				</a>
				<a
					href="https://jbernardorebelo.github.io/JBernardoRebeloMusic/"
					className="contactElement"
				>
					Portfolio
				</a>
			</_Contacts>
		</div>
	);
}
