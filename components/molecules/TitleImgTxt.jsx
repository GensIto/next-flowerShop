import Image from "next/image";

export const TitleImgTxt = (props) => {
	return (
		<div className="flex flex-col justify-center justify-items-center mx-3 p-3">
			<h1 className="font-mono text-center text-5xl mb-3">{props.title}</h1>
			<Image src={props.src} alt={props.alt} width={props.w} height={props.h} />
			<p className="font-mono text-justify">{props.txt}</p>
		</div>
	);
};
