import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from "styled-components";

const HeaderLayout = styled.header`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
`;

const HeaderLink = styled.a`
    text-shadow: 3px 3px 5px #333;
`;


import React, { useState } from "react"

export default function Header() {
    return (
        <>
            <Head>
                <title>Shir Web Next.js</title>
                <meta name="description" content="I'm Gens Make by create next app" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width" />
                <meta name="format-detection" content="telephone=no" />
                <meta content="Udemyで勉強したので勉強したのでアウトプットがてらに作ってみました。テンプレート作成をメインに考え、propsを渡し管理しやすいようにやってみました。デザイン参考: https://xd.adobe.com/view/f6d5de57-50c3-4956-996b-9de2e314b181-a386/specs/ 無料のデザインデータ検索で出てきたのを使いました" name="description" />
                <meta property="og:title" content="made nextJs" />
                <meta property="og:description" content="Udemyで勉強したので勉強したのでアウトプットがてらに作ってみました。テンプレート作成をメインに考え、propsを渡し管理しやすいようにやってみました。デザイン参考: https://xd.adobe.com/view/f6d5de57-50c3-4956-996b-9de2e314b181-a386/specs/ 無料のデザインデータ検索で出てきたのを使いました" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="ページの URL" />
                <meta property="og:image" content="/header.pngs" />
                <meta property="og:site_name" content="Shir Web Next.js" />
                <meta property="og:locale" content="ja_JP" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderLayout className="fixed z-30 flex justify-between justify-items-center px-10 py-5">
                {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                <Link href='#'><HeaderLink className="text-4xl text-center text-white" href='#'>Shiro</HeaderLink></Link>
                <Menu className="outline-0">
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem>
                            <Link href="#concept">
                                <a href="#concept">Concept</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#work">
                                <a href="#work">Work</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#florist">
                                <a href="#florist">Florist</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#info">
                                <a href="#info">Shop information</a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#contact">
                                <a href="#contact">Contact</a>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HeaderLayout>
        </>
    )
}