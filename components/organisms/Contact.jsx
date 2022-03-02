import { Link } from "@chakra-ui/react";
import styled from "styled-components";
import { Catch } from "./Catch";

const BgImg = styled.div`
    background-image: url(/contact_us@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
`;



export const Contact = () => {
    return (
        <BgImg className="p-10">
            <Catch
                title="Contact us"
                txt1="イベントや結婚式でご利用する装花のご相談や、"
                txt2="フラワーアレンジメントのご予約などはこちらからお問い合わせください"
            />
            <div className="mx-auto w-64">
                <Link href="mailto:info@sample.com?bcc=info@one.com">
                    <a href="mailto:info@sample.com?bcc=info@one.com">
                        <div className="flex bg-white px-5 py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="pl-3 text-2xl">お問い合わせ</p>
                        </div>
                    </a>
                </Link>
            </div>
        </BgImg >
    )
}
