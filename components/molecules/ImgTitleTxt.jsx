import Image from "next/image";

export const ImgTitleTxt = (props) => {
	return (
		<div className="flex flex-col justify-center justify-items-center">
			<Image src={props.src} alt={props.alt} width={props.w} height={props.h} />
			<h1 className="font-poppins font-bold text-left text-2xl mt-3 mb-2">{props.title}</h1>
			<p className="font-mono text-justify">{props.txt}</p>
		</div>
	);
};
