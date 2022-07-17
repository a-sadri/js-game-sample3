export const Title: React.FC<{
	text: string;
	color: string;
	font: string;
}> = ({text, style}) => {
	return <h1 style={style}>{text}</h1>;
};
