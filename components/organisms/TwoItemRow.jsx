import { ImgTitleTxt } from "../molecules/ImgTitleTxt";

import styled from "styled-components";

const Wrap = styled.div`
	width: 48%;
`;

export const TwoItemRow = () => {
	return (
		<div className="flex justify-center justify-items-center">
			<Wrap>
				<ImgTitleTxt
					src="/vercel.svg"
					alt="Vercel Logo"
					w={1440}
					h={800}
					title="THIS TITLE"
					txt="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、"
				/>
			</Wrap>
			<Wrap>
				<ImgTitleTxt
					src="/vercel.svg"
					alt="Vercel Logo"
					w={1440}
					h={800}
					title="THIS TITLE"
					txt="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、"
				/>
			</Wrap>
		</div>
	);
};
