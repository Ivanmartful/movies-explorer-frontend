import { useLayoutEffect, useState } from "react";

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({ width: 0 });

	const handleSize = () => {
		setWindowSize({
			width: window.innerWidth,
		});
	};

	useLayoutEffect(() => {
		handleSize();

		window.addEventListener("resize", handleSize);

		return () => window.removeEventListener("resize", handleSize);
	}, []);

	return windowSize;
};

export default useWindowSize;