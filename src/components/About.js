import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="container my-5">
				<div className="bg-body-tertiary p-5 rounded">
					<div className="col-sm-8 py-5 mx-auto">
						<h1 className="display-5 fw-normal">{t("AboutSec1.head1")}</h1>
						<p className="fs-5">
                        {t("AboutSec1.head2")}
						</p>
						<p>
                        {t("AboutSec1.head3")}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
