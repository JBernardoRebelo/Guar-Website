/* eslint-disable react/jsx-pascal-case */
import React from "react";
import GameplaySlider from "./GameplaySlider";

import { _InfoSection } from "../Style";
import { _TextBox } from "../Style";

import img_pumpkin from "../Images/pumpkin.png";
import img_creature from "../Images/creature.jpg";
import img_white_creature from "../Images/white_creature.PNG";
import img_swamp from "../Images/swamp.png";
import img_character from "../Images/character.jpg";
import img_dwarf from "../Images/dwarf.png";
import img_banner from "../Images/pumpkinbanner.png";

const containerStyles = {
	width: "1200px",
	height: "400px",
	margin: "0 auto",
};

const marginTop = {
	marginTop: "200px",
};

export default function Gameplay() {
	const slides = [
		{
			image: null,
			title: "",
			description: "",
		},
		{
			image: img_swamp,
			title: "Quests and Objectives",
			description:
				" The game starts with the player receiving a quest or objective from a non-playable character (NPC). The player must then explore the game world to find the required items, defeat enemies, or accomplish certain tasks to complete the quest.",
		},
		{
			image: img_creature,
			title: "Combat",
			description:
				"Combat in Guar is turn-based, and players can choose from a variety of attacks and spells to defeat their enemies. Players can also recruit companions to fight alongside them, each with their own unique abilities and attributes.",
		},
		{
			image: img_pumpkin,
			title: "Leveling up",
			description:
				"As players progress through the game, they earn experience points (XP) for defeating enemies and completing quests. XP allows the player to level up, increasing their stats and unlocking new abilities.",
		},
		{
			image: img_white_creature,
			title: "Exploration",
			description:
				"The world of Guar is vast, and players must explore it to find hidden treasures, secret locations, and valuable resources. Exploration is also necessary to progress through the main storyline and complete quests.",
		},
		{
			image: img_banner,
			title: "Crafting and Upgrading",
			description:
				"The game features a robust crafting system that allows players to create weapons, armor, and other items using resources gathered from the game world. Players can also upgrade their existing gear to make it more powerful.",
		},
		{
			image: img_character,
			title: "Social Interaction",
			description:
				"Players can interact with NPCs in the game world, building relationships and earning rewards for completing social objectives.",
		},
		{
			image: img_dwarf,
			title: "Repeat",
			description:
				"The gameplay cycle repeats as the player progresses through the game, completing quests, leveling up, exploring new areas, and facing increasingly difficult challenges.",
		},
	];

	return (
		<div className="marginTop" id="Gameplay">
			<_InfoSection>
				<h2 className="Title">Gameplay</h2>
				<_TextBox>
					<p className="Info">
						<p>
							The game is played from a third-person perspective, and players
							must navigate through a variety of environments, including
							forests, dungeons, and cities, to complete their quest.
						</p>
						<div style={containerStyles}>
							<GameplaySlider slides={slides} parentWidth={400} />
						</div>
						<p style={marginTop}>
							Overall, Guar offers a rich and immersive RPG experience, with
							deep gameplay mechanics and an engaging storyline that will keep
							players hooked for hours on end.
						</p>
					</p>
				</_TextBox>
			</_InfoSection>
		</div>
	);
}
