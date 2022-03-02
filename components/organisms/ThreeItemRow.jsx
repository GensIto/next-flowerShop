import { ImgTitleTxt } from "../molecules/ImgTitleTxt";

export const ThreeItemRow = () => {
	return (
		<div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between justify-items-center">
			<div className="w-full mb-8 md:mb-0 md:w-1/3 max-w-xs">
				<ImgTitleTxt
					src="/florist_shiyu@2x.png"
					alt="Vercel Logo"
					w={300}
					h={180}
					title="Shiyu"
					txt="お花茶屋大学フラワーアレンジメント科を卒業後、さまざまな白い花を探すために世界を一周し、Shiroの創業者となる。"
				/>
			</div>
			<div className="w-full mb-8 md:mb-0 md:w-1/3 max-w-xs">
				<ImgTitleTxt
					src="/florist_mao@2x.png"
					alt="Vercel Logo"
					w={300}
					h={180}
					title="Mao"
					txt="花の魅力に惹かれ、空間デザインの世界からフローリストの道を歩む。主に結婚式やイベントで使用するお花のディレクション担当。"
				/>
			</div>
			<div className="w-full md:w-1/3 max-w-xs">
				<ImgTitleTxt
					src="/florist_omichan@2x.png"
					alt="Vercel Logo"
					w={300}
					h={180}
					title="Omichan"
					txt="フローリスト兼ガーデナーという特殊な経歴をもつ。豊富な知識と技術でお客様のオーダーを叶える。"
				/>
			</div>
		</div>
	);
};
