import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const Topbar = () => {
	const { t } = useTranslation();
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						LANG
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/home">
									{t("Home")}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									{t("About")}
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									{t("Contact")}
								</Link>
							</li>
						</ul>
						<div className="d-flex">
							<LanguageSelector />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Topbar;
