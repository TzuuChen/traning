import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

import { useData } from "@/store";
import { useTranslation } from "react-i18next";
const Data = () => {
	const { name, email, age } = useData();
	const { t } = useTranslation();
	const router = useRouter();
	return (
		<>
			<div>
				<p>
					{t("name")}: {name}
				</p>
				<p>
					{t("email")}: {email}
				</p>
				<p>
					{t("age")}: {age}
				</p>
			</div>
			<Button
				color="primary"
				variant="contained"
				fullWidth
				onClick={() => {
					router.push("./");
				}}>
				{t("resubmit")}
			</Button>
		</>
	);
};

export default Data;
