import {interpolateColors, useCurrentFrame} from 'remotion';

export const ColorInterPolate: React.FC<{
	fcolor: string;
	scolor: string;
}> = (fcolor, scolor) => {
	const frame = useCurrentFrame();

	const color = interpolateColors(frame, [0, 80], [fcolor, scolor]);

	return color;
};
