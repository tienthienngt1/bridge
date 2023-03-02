import Image from "../../image";

export default () => {
	return (
		<div className="logo flex flex-col items-start ml-3 mr-0.5 sm:mr-3">
			<a
				title="Cross-Chain Bridge"
				href={process.env.NEXT_PUBLIC_PROTOCOL_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col items-start w-full"
			>
				<div className="flex items-center space-x-1 min-w-max sm:mr-3">
					<div className="flex items-center dark:hidden">
						<div className="flex sm:hidden">
							<Image
								src="/logos/logo.jpg"
								width={32}
								height={32}
							/>
						</div>
						<div className="hidden sm:flex">
							<Image
								src="/logos/logo.jpg"
								width={128}
								height={32}
							/>
						</div>
						<div>Ordinal Shibarium</div>
					</div>
					<div className="items-center hidden dark:flex">
						<div className="flex sm:hidden">
							<Image
								src="/logos/logo.jpg"
								width={32}
								height={32}
							/>
						</div>
						<div className="hidden sm:flex">
							<Image
								src="/logos/logo.jpg"
								width={128}
								height={32}
							/>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};
