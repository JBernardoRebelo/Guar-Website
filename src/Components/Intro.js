/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { _InfoSection } from "../Style";
import { _TextBox } from "../Style";

import img_dwarf from "../Images/dwarf.png";

function Intro() {
	return (
		<div id="Intro">
			<_InfoSection>
				<h2 className="Title">Intro</h2>
				<_TextBox>
					<img src={img_dwarf} className="image" height={200} alt="introimg" />
					<p className="Info">
						<p>
							Welcome to the fantastical world of Guar, a realm filled with
							magic, mythical creatures, and perilous adventures. Guar is a land
							that has been plagued by darkness and evil forces for centuries.
							The only hope for the land is a group of brave heroes who are
							willing to embark on a journey to restore the balance between good
							and evil.
						</p>
						<p>
							As a player in this role-playing game, you will create your own
							hero character and customize it with a wide range of abilities,
							equipment, and skills. You will venture into dangerous dungeons,
							dark forests, and treacherous mountains to battle evil creatures
							and uncover ancient artifacts that hold the key to defeating the
							darkness. The game features a rich and immersive storyline that
							unfolds as you progress through the game. You will encounter a
							host of intriguing characters, each with their own unique
							personality and backstory, who will offer quests and challenges
							for you to complete.
						</p>
						<p>
							Guar is a world where magic is real, and you will be able to
							harness its power to aid you in your quest. As you journey through
							the world, you will learn spells and abilities that will allow you
							to manipulate the elements, heal wounds, and summon magical
							creatures to aid you in battle. With an expansive world to
							explore, a rich storyline to unravel, and a plethora of
							customizable options for your character, Thaloria is the perfect
							game for anyone who loves immersive, open-world role-playing
							games. Do you have what it takes to become the hero Guar needs?
							The fate of the world is in your hands.
						</p>
					</p>
				</_TextBox>
			</_InfoSection>
		</div>
	);
}

export default Intro;
