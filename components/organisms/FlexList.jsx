import Image from "next/image";
import { ImgTitleTxt } from "../molecules/ImgTitleTxt";

export const FlexList = (props) => {
	return (
		<div className="justify-center md:justify-between flex flex-wrap flex-row justify-items-center ">
			<div className=" p-5 md:p-0 flex flex-col justify-start justify-items-start max-w-md">
				<ImgTitleTxt
					src="/work_gift@2x.png"
					alt="Vercel Logo"
					w={420}
					h={420}
					title="Gift"
					txt="花束をお送りしたいお相手、伝えたいお気持ちに合わせたプレゼント用花束のアレンジメントをさせていただきます。花言葉などの豆知識もお伝えします。"
				/>
			</div>
			<div className="sm:mt-0  p-5 md:p-0 md:mt-32 flex flex-col justify-start justify-items-start max-w-md">
				<ImgTitleTxt
					src="/work_decoretion@2x.png"
					alt="Vercel Logo"
					w={420}
					h={630}
					title="Decoration"
					txt="お写真を彩るお花を一輪から販売。一定期間のご契約で定期的にご自宅へ配送させていただくことも可能です。"
				/>
			</div>
			<div className="sm:mt-0  p-5 md:p-0 md:-mt-52 flex flex-col justify-start justify-items-start max-w-md">
				<ImgTitleTxt
					src="/work_wedding@2x.png"
					alt="Vercel Logo"
					w={420}
					h={630}
					title="Wedding"
					txt="ウエディングドレスに合わせたブーケや式場の雰囲気に合う装花をご提案。お打ち合わせの流れや回数、費用などにつきましてはお問い合わせください。"
				/>
			</div>
			<div className="sm:mt-0  p-5 md:p-0 md:mt-32 flex flex-col justify-start justify-items-start max-w-md">
				<ImgTitleTxt
					src="/work_for_yourself@2x.png"
					alt="Vercel Logo"
					w={420}
					h={400}
					title="For yourself"
					txt="お部屋の雰囲気やライフスタイルをお聞きしてご自宅用の花束をご提案し、少しでも長く咲かせるコツもお教えします。花束に合った花瓶をご提案することも可能です。"
				/>
			</div>
		</div>
	);
};
