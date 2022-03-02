import Image from "next/image";
import styled from "styled-components";

const Bg = styled.div`
    width: 100%;
    height: 30vh;
    min-height: 400px;
    position: relative;
    background: rgb(237,237,237);
    background: linear-gradient(0deg, rgba(237,237,237,1) 50%, rgba(255,255,255,1) 50%);
    ${({ theme }) => theme.media.sp`
    // ここに media query 書く
    height: 15vh;
    min-height: 200px;
  `};
`;

const ImgBox = styled.div`
    max-width: 960px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    ${({ theme }) => theme.media.sp`
        // ここに media query 書く
        width: 80%;
    `};
`;

export const ImgBgHarf = (props) => {
    return (
        <Bg>
            <ImgBox>
                <Image src={props.src} alt={props.alt} width={props.w} height={props.h} />
            </ImgBox>
        </Bg>
    )
}
