import Image from "next/image"

import styled from "styled-components";

const Border = styled.div`
    // border: 1px dotted #333;
    border: none;
`;

const TxtBorder = styled.p`
    border-left: 1px solid #333;
    padding-left: 1rem;
`;

export const TwoRow = (props) => {
    return (
        <div className="flex-wrap flex justify-center md:justify-between justify-items-center mt-5">
            <div className="p-5"><Image src={props.src} alt={props.alt} width={props.w} height={props.h} /></div>
            <Border className="h-full w-full md:w-2/5 flex flex-col justify-center justify-items-center md:p-5">
                <div className="flex flex-col md:flex-row justify-start m-4">
                    <p className="pr-2.5 md:pr0 md:w-28">住所</p>
                    <TxtBorder className="">{props.addressnum}<span className="block">{props.address}</span></TxtBorder>
                </div>
                <div className="flex flex-col md:flex-row justify-start m-4">
                    <p className="pr-2.5 md:pr0 md:w-28">電話番号</p>
                    <TxtBorder className="">{props.tle}</TxtBorder>
                </div>
                <div className="flex flex-col md:flex-row justify-start m-4">
                    <p className="pr-2.5 md:pr0 md:w-28">営業時間</p>
                    <TxtBorder className="">{props.time}<span className="block">{props.holiday}</span></TxtBorder>
                </div>
                <div className="flex flex-col md:flex-row justify-start m-4">
                    <p className="pr-2.5 md:pr0 md:w-28">アクセス</p>
                    <TxtBorder className="">{props.access1}<span className="block">{props.access2}</span></TxtBorder>
                </div>
            </Border>
        </div>
    )
}
