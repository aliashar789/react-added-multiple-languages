import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="container">
				<main>
					<div className="py-5 text-center">
						<h2>{t("ContectSec1.title")}</h2>
						<p className="lead">
                        {t("ContectSec1.description")}
						</p>
					</div>

					<div className="row g-5">
						<div className="col-md-7 col-lg-8">
							<form className="needs-validation" noValidate>
								<div className="row g-3">
									<div className="col-sm-6">
										<label htmlFor="firstName" className="form-label">
                                        {t("ContactForm.fname")}
										</label>
										<input
											type="text"
											className="form-control"
											id="firstName"
											placeholder=""
											required
										/>
									</div>

									<div className="col-sm-6">
										<label htmlFor="lastName" className="form-label">
                                        {t("ContactForm.lname")}
										</label>
										<input
											type="text"
											className="form-control"
											id="lastName"
											placeholder=""
											required
										/>
									</div>

									<div className="col-12">
										<label htmlFor="username" className="form-label">
                                        {t("ContactForm.uname")}
										</label>
										<div className="input-group has-validation">
											<span className="input-group-text">@</span>
											<input
												type="text"
												className="form-control"
												id="username"
												placeholder={t("ContactForm.uname")}
												required
											/>
										</div>
									</div>

									<div className="col-12">
										<label htmlFor="email" className="form-label">
                                        {t("ContactForm.email")} <span className="text-body-secondary"></span>
										</label>
										<input
											type="email"
											className="form-control"
											id="email"
											placeholder={t("ContactForm.emailplaceholder")}
										/>
									</div>

									<div className="col-12">
										<label htmlFor="address2" className="form-label">
                                        {t("ContactForm.address")}<span className="text-body-secondary"></span>
										</label>
										<input
											type="text"
											className="form-control"
											id="address2"
											placeholder={t("ContactForm.addressplaceholder")}
										/>
									</div>
								</div>

								<hr className="my-4" />

								<button className="w-100 btn btn-primary btn-lg" type="submit">
                                {t("ContactForm.button")}
								</button>
							</form>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Contact;
