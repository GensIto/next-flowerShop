import styled from "styled-components";

const Title = styled.h1`
	color: #333;
	font-size: 3rem;
	position: relative;
	font-weight: bold;
	::after{
		content:"";
		display:block;
		width: 5rem;
		height: 3px;
		background-color:#333;
		position:absolute;
		bottom: -10%;
		left: 50%;
		transform: translate(-50%);
	}
`;

const Txt = styled.p`
	width: 100%;
`
//styled-componentsはtailwindに勝つ

export const Catch = (props) => {
	return (
		<div className="flex flex-col justify-center items-center p-5">
			<Title className="text-center font-poppins mb-10">
				{props.title}
			</Title>
			<div>
				<Txt className="text-justify md:text-center text-base">{props.txt1}</Txt>
				<Txt className="text-justify md:text-center text-base">{props.txt2}</Txt>
				<Txt className="text-justify md:text-center text-base">{props.txt3}</Txt>
			</div>
		</div>
	);
};
