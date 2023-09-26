import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<main>
				<section className="py-4 text-center container">
					<div className="row py-lg-5">
						<div className="col-lg-6 col-md-8 mx-auto">
							<h1 className="fw-light">{t("Hero.title")}</h1>
							<p className="lead text-body-secondary">
                            {t("Hero.description")}
							</p>
						</div>
					</div>
				</section>

				<div className="album py-5 bg-body-tertiary">
					<div className="container">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
							<div className="col">
								<div className="card shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title></title>
										<rect width="100%" height="100%" fill="#55595c"></rect>
										<text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
									</svg>
									<div className="card-body">
										<p className="card-text">
                                        {t("Cards.card1")}
										</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title></title>
										<rect width="100%" height="100%" fill="#55595c"></rect>
										<text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
									</svg>
									<div className="card-body">
										<p className="card-text">
                                        {t("Cards.card2")}
										</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title></title>
										<rect width="100%" height="100%" fill="#55595c"></rect>
										<text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
									</svg>
									<div className="card-body">
										<p className="card-text">
                                        {t("Cards.card3")}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
