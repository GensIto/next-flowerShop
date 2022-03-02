import Image from "next/image"
import styled from "styled-components";

const ImgBox = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const TxtBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const Main = (props) => {
    return (
        <div className="relative">
            <ImgBox>
                <Image src={props.src} alt={props.alt} width={props.w} height={props.h} />
            </ImgBox>
            <TxtBox>
                <h1 className="text-6xl md:text-9xl text-center text-white mb-3">Shir</h1>
                <p className="md:text-xl text-center text-white">- White flower shop -</p>
            </TxtBox>
        </div>
    )
}
