import React from "react";
import "./Navbar.css";
import BeyondLogo from "../../images/beyond-logo.png";
// import { GiPositionMarker } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-belt">
				<div className="nav-left">
					<img className="nav-logo" src={BeyondLogo} alt="beyond-logo" />
					<div className="global-location">
						<GrLocation />
						<div className="block-city">
							<span className="deliver">Deliver to</span>
							<span className="city">Germany</span>
						</div>
					</div>
				</div>
				<div className="nav-fill">
					<div className="nav-search">
						<form action="" className="nav-search-form">
							<input type="text" className="search-box" placeholder="Search Amazon"/>
						</form>
					</div>
				</div>
				<div className="nav-right"></div>
			</div>
			<div className="nav-main"></div>
		</div>
	);
};

export default Navbar;
