import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import PageVisibility from "react-page-visibility";

import Navbar from "../../components/navbar";
import meta from "../../lib/meta";
import { THEME, PAGE_VISIBLE } from "../../reducers/types";

export default ({ children }) => {
	const dispatch = useDispatch();
	const { preferences, chains, assets } = useSelector(
		(state) => ({
			preferences: state.preferences,
			chains: state.chains,
			assets: state.assets,
		}),
		shallowEqual
	);
	const { theme } = { ...preferences };
	const { chains_data } = { ...chains };
	const { assets_data } = { ...assets };

	const router = useRouter();
	const { asPath } = { ...router };

	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			localStorage.getItem(THEME) &&
			localStorage.getItem(THEME) !== theme
		) {
			dispatch({
				type: THEME,
				value: localStorage.getItem(THEME),
			});
		}
	}, [theme]);

	const headMeta = meta(asPath, null, chains_data, assets_data);

	const { title, description, image, url } = { ...headMeta };

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name="og:site_name"
					property="og:site_name"
					content={title}
				/>
				<meta name="og:title" property="og:title" content={title} />
				<meta itemProp="name" content={title} />
				<meta itemProp="headline" content={title} />
				<meta itemProp="publisher" content={title} />
				<meta name="twitter:title" content={title} />

				<meta name="description" content={description} />
				<meta
					name="og:description"
					property="og:description"
					content={description}
				/>
				<meta itemProp="description" content={description} />
				<meta name="twitter:description" content={description} />

				<meta name="og:image" property="og:image" content={image} />
				<meta itemProp="thumbnailUrl" content={image} />
				<meta itemProp="image" content={image} />
				<meta name="twitter:image" content={image} />
				<link rel="image_src" href={image} />

				<meta name="og:url" property="og:url" content={url} />
				<meta itemProp="url" content={url} />
				<meta name="twitter:url" content={url} />
				<link rel="canonical" href={url} />
			</Head>
			<PageVisibility
				onChange={(v) =>
					dispatch({
						type: PAGE_VISIBLE,
						value: v,
					})
				}
			>
				<div
					data-layout="layout"
					data-background={theme}
					data-navbar={theme}
					className={`antialiased ${
						/*'overflow-y-scroll'*/ "disable-scrollbars"
					} text-sm ${theme}`}
				>
					<div className="wrapper">
						<div
							className="w-full bg-white main dark:bg-black"
							style={{
								minHeight: "calc(100vh - 44px)",
								backgroundColor: "none",
							}}
						>
							<Navbar />
							<div className="w-full px-2 sm:px-4">
								{children}
							</div>
						</div>
					</div>
					<div className="bg-animation">
						<div id="stars"></div>
						<div id="stars2"></div>
						<div id="stars3"></div>
						<div id="stars4"></div>
					</div>
				</div>
			</PageVisibility>
		</>
	);
};
