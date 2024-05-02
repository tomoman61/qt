function IconContentCopy(props: React.SVGProps<SVGSVGElement>) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1.8em"
			width="1.8em"
			{...props}
		>
			<path d="M19 21H8V7h11m0-2H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2m-3-4H4a2 2 0 00-2 2v14h2V3h12V1z" />
		</svg>
	);
}

export default IconContentCopy;
