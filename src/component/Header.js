import React, { useState } from "react";
import "./header.css";
import { navList } from "./data";

const Header = () => {
	console.log(navList);
	const [value, setValue] = useState(0);
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					Thang Tran
				</a>

				<div
					className={`${
						showMenu ? "nav__menu menu__show" : "nav__menu"
					}`}
				>
					<ul className="nav__list grid">
						{navList.map((item, index) => {
							const { link, title, icon } = item;
							return (
								<li
									key={index}
									className="nav__item"
									onClick={() => setValue(index)}
								>
									<a
										href={link}
										className={`${
											value === index
												? "nav__link active"
												: "nav__link"
										}`}
									>
										<i className={icon}></i>
										{title}
									</a>
								</li>
							);
						})}
					</ul>
					<i
						className="uil uil-times nav__close"
						onClick={() => setShowMenu(!showMenu)}
					></i>
				</div>
				<div className="nav__toogle">
					<i
						className="uil uil-apps"
						onClick={() => setShowMenu(true)}
					></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
