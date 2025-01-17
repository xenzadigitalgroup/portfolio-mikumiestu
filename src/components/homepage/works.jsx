import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work dan Study"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://xenzadigitalgroup.github.io/invesnew/assets/public/img/LOGO.png"
								alt="Xenza Digital Group"
								className="work-image"
							/>
							<div className="work-title">Xenza Digital Group</div>
							<div className="work-subtitle">
								CEO & Web Developer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./icon.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Dev Sphere Academy</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="https://th.bing.com/th/id/OIP.6w3IXFE6IpqL-uEZXVRtwwHaEO?w=325&h=185&c=7&r=0&o=5&dpr=2&pid=1.7"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Universitas Putra Indonesia "YPTK"</div>
							<div className="work-subtitle">
								University Student
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
