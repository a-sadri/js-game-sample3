import {useVideoConfig, useCurrentFrame, interpolate, spring} from 'remotion';

import {ColorInterPolate} from '../components/ColorInterPolate';

import {YELLOW_COLOR, GREEN_COLOR, BLUE_COLOR} from '../constants';

export const VariationsIcon: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Define scale animation primitive and also it works for opacity animation over time
	const scaleProgress = spring({
		frame,
		fps,
	});

	// Define scale animation primitive and also it works for opacity animation over time
	const opacityProgress = spring({
		frame: frame - 30,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive
	const moveProgress = spring({
		frame: frame - 10,
		fps,
		config: {
			damping: 200,
		},
	});

	// Set range of value for scale transform property to animate
	const scale = interpolate(scaleProgress, [0, 1], [2, 1]);
	// Set range of value for transform in x axis property to animate
	const firstPathMove = interpolate(moveProgress, [0, 1], [-100, 0]);
	const secondPathMove = interpolate(moveProgress, [0, 1], [100, 0]);

	return (
		<svg
			version="1.1"
			id="Capa_1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 312.602 312.602"
			style={{
				enableBackground: 'new 0 0 312.602 312.602',
				width: '450px',
				opacity: scaleProgress,
			}}
			xmlSpace="preserve"
		>
			<path
				style={{
					transform: `scale(${scale}) translateX(${firstPathMove}px)`,
					fill: ColorInterPolate('white', BLUE_COLOR),
				}}
				d="M86.492,195.387c-25.231-12.019-41.537-37.843-41.537-65.786V46.007c6.051-1.731,12.361-3.326,19.32-4.719
			c3.893-0.773,6.412-4.56,5.634-8.436c-0.775-3.895-4.559-6.472-8.438-5.646C38.445,31.791,20.664,37.878,3.779,46.959
			c-3.485,1.874-4.795,6.224-2.93,9.71c1.296,2.418,3.769,3.787,6.344,3.787c1.146,0,2.309-0.276,3.393-0.852
			c6.375-3.426,13.022-6.302,20.003-8.908v78.9c0,33.462,19.514,64.359,49.724,78.729c0.996,0.485,2.058,0.701,3.086,0.701
			c2.683,0,5.258-1.503,6.492-4.087C91.593,201.361,90.07,197.081,86.492,195.387z"
			/>
			<path
				style={{
					opacity: opacityProgress,
					fill: ColorInterPolate('white', YELLOW_COLOR),
				}}
				d="M151.38,36.502c4.056,0.613,7.515-2.347,7.987-6.271c0.477-3.939-2.337-7.512-6.279-7.985
			c-23.051-2.779-47.733-2.755-70.695,0.084c-3.932,0.491-6.727,4.087-6.248,8.013c0.445,3.649,3.531,6.31,7.111,6.31
			c0.291,0,0.583-0.016,0.89-0.054c8.608-1.062,17.499-1.573,26.421-1.797v173.35c0,3.971,3.212,7.169,7.184,7.169
			c3.963,0,7.186-3.198,7.186-7.169V34.765C133.855,34.979,142.76,35.498,151.38,36.502z"
			/>
			<path
				style={{
					transform: `scale(${scale}) translateX(${secondPathMove}px)`,
					fill: ColorInterPolate('white', GREEN_COLOR),
				}}
				fill="#ffffff"
				d="M231.533,44.517c-17.272-8.61-36.961-15.004-58.533-19.043c-3.851-0.731-7.654,1.843-8.375,5.723
			c-0.733,3.899,1.843,7.656,5.734,8.367c6.985,1.312,13.657,2.976,20.186,4.797v85.212c0,29.322-17.456,55.68-44.454,67.08
			c-3.651,1.555-5.366,5.759-3.812,9.422c1.15,2.745,3.812,4.384,6.608,4.384c0.934,0,1.888-0.176,2.797-0.549
			c32.332-13.693,53.215-45.22,53.215-80.321V48.937c7.045,2.495,13.866,5.26,20.201,8.417c1.034,0.517,2.128,0.766,3.202,0.766
			c2.629,0,5.182-1.467,6.432-3.985C236.521,50.592,235.071,46.292,231.533,44.517z"
			/>
		</svg>
	);
};
