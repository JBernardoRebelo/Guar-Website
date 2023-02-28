/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { _InfoSection } from "../Style";
import { _TextBox } from "../Style";

import img_forest from "../Images/forest.png";
import img_character from "../Images/character.jpg";

export default function Story() {
	return (
		<div className="marginTop" id="Story">
			<_InfoSection>
				<h2 className="Title">Story</h2>
				<_TextBox>
					<p className="Info">
						<p>
							{" "}
							As I step through the portal, I feel a rush of magic flow through
							my body. My surroundings transform from the familiar forest I know
							so well to an otherworldly realm filled with floating islands and
							mystical creatures. As I take in my new surroundings, a voice
							echoes in my mind. It's the voice of the wise mage who sent me on
							this quest. "Welcome, brave adventurer. You have been chosen to
							embark on a journey to save our world from the evil sorcerer who
							seeks to bring eternal darkness upon us. You must find the four
							elemental crystals scattered across this land and use their power
							to defeat him."
						</p>
						<p>
							With a determined heart, I set out to explore this new world. The
							first island I come across is shrouded in mist, and the air is
							thick with a mysterious energy. As I make my way through the dense
							fog, I feel a presence lurking around me. Suddenly, a pack of
							shadow wolves pounce at me from the shadows. With my sword in
							hand, I engage in a fierce battle with the beasts. Their eyes glow
							red as they circle me, but I stand my ground and swing my sword
							with precision. With one final strike, I defeat the last wolf and
							breathe a sigh of relief.
						</p>
					</p>
					<img
						src={img_character}
						className="image"
						height={200}
						alt="character img"
					/>
				</_TextBox>
				<_TextBox>
					<img
						src={img_forest}
						className="image"
						height={200}
						alt="forestimg"
					/>
					<p className="Info">
						<p>
							{" "}
							As I continue on my journey, I come across a village of friendly
							faeries. They welcome me with open arms and offer their assistance
							in my quest. They tell me of a powerful mage who may know the
							location of the first crystal. With their guidance, I make my way
							to the mage's tower. As I approach the tower, I see that it is
							guarded by fierce golems made of stone. I must use my wits to
							outsmart them and make my way inside. Once there, the mage greets
							me and tells me of the crystal's location deep within a nearby
							cave. I make my way through the cave, battling ferocious creatures
							and dodging deadly traps.
						</p>
						<p>
							Finally, I reach the chamber where the crystal is kept. It glows
							with a radiant energy, and I can feel its power coursing through
							me as I take hold of it. With one crystal in hand, I know that
							there are still three more to find. But I am not afraid, for I am
							a brave adventurer on a quest to save the world. I step out of the
							cave and back into the sunlight, ready for whatever challenges lie
							ahead.
						</p>
					</p>
				</_TextBox>
			</_InfoSection>
		</div>
	);
}
