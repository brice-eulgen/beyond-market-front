import React from "react";
import "./Navbar.css";
import BeyondLogo from "../../images/beyond-logo.png";
// import { GiPositionMarker } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { ImSearch } from "react-icons/im";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-belt">
				<div className="nav-left">
					<img src={BeyondLogo} alt="beyond-logo" />
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
						<select name="categories" id="categories">
							<option value="All">All Departements</option>
							<option value="Automotive">Automotive</option>
							<option value="Computer">Comptuter</option>
							<option value="Panthère de jade de la devastation">
								Panthère de jade de la devastation
							</option>
						</select>
						<input
							type="text"
							className="search-box"
							placeholder="Search on Beyond Market..."
						/>
						<button>{ImSearch}</button>
					</div>
				</div>
				<div className="nav-right"></div>
			</div>
			<div className="nav-main"></div>
		</div>
	);
};

export default Navbar;
