import Layout from "../components/templates/Layout";
import section from "../styles/Layout/section.module.scss";
import container from "../styles/Layout/container.module.scss";
import Slider from "../components/organisms/Slider";
import { TwoRow } from "../components/organisms/TwoRow";
import { ThreeItemRow } from "../components/organisms/ThreeItemRow";
import { FlexList } from "../components/organisms/FlexList";
import { TwoRowReverse } from "../components/organisms/TwoRowReverse";
import { Catch } from "../components/organisms/Catch";
import { TwoItemRow } from "../components/organisms/TwoItemRow";
import { Main } from "../components/organisms/Main";
import { ImgBgHarf } from "../components/organisms/ImgBgHarf";


import styled from "styled-components";
import { Contact } from "../components/organisms/Contact";

const Bg = styled.div`
    padding: 2rem;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(237,237,237,1) 50%);
`;

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Main */}
        <div className={container.ContainerFull}>
          <Main src="/header.png"
            alt="Vercel Logo"
            w={1440}
            h={800} />
        </div>
        {/* Main */}
        {/* Catch */}
        <div id="concept" className={section.normal}>
          <div className={container.Container}>
            <Catch
              title="Concept"
              txt1="私たちShiroは、白いお花だけを取り扱うフラワーショップです。"
              txt2="色とりどりの花束も素敵だけれど、洗練された「白」の美しさを感じてほしい。"
              txt3="「白」に対する愛から生まれた静寂な時間が流れる店へ、ぜひお越しください。"
            />
          </div>
        </div>
        {/* Catch */}
        {/* ImgBgHarf  */}
        <div className={section.normal}>
          <div className={container.ContainerFull}>
            <ImgBgHarf src="/concept.png"
              alt="Vercel Logo"
              w={960}
              h={400} />
          </div>
        </div>
        {/* ImgBgHarf  */}
        {/* Catch */}
        <div id="work" className={section.normal}>
          <div className={container.Container}>
            <Catch
              title="Work"
              txt1="オーダーメイドでのブーケ・アレンジメントのデザインのほか、"
              txt2="ウェディングやイベントの装花なども行なっています。"
              txt3="一人一人にあったご提案をさせていただきます。"
            />
          </div>
        </div>
        {/* Catch */}
        {/* FlexList */}
        <div className={section.normal}>
          <div className={container.Container}>
            <FlexList />
          </div>
        </div>
        {/* FlexList */}
        {/* ThreeItemRow */}
        <div id="florist" className={section.normal}>
          <div className={container.ContainerFull}>
            <Bg>
              <Catch
                title="Florist"
                txt1="Shiro専属のフローリストたちをご紹介。"
                txt2="得意の分野であなたのオーダーを最大限に叶えます。"
              />
              <ThreeItemRow />
            </Bg>
          </div>
        </div>
        {/* ThreeItemRow */}
        {/* TwoRow */}
        <div id="info" className={section.normal}>
          <div className={container.Container}>
            <Catch
              title="Shop information"
              txt1="Shiroの店舗情報をご紹介します。"
            />
            <TwoRow
              src="/shop_information@2x.png"
              alt="Vercel Logo"
              w={480}
              h={320}
              addressnum="〒810-0001"
              address="福岡県福岡市中央区天神0-0-0"
              tle="0120-000-000"
              time="11:00-20:30"
              holiday="（定休日：水曜日）"
              access1="天神駅12a出口から徒歩6分"
              access2="東京駅8b出口から徒歩12分"
            />
          </div>
        </div>
        {/* TwoRow */}
        {/* Next */}
        <div id="contact" className={section.normal}>
          <div className={container.Container}>
            <Contact />
          </div>
        </div>
        {/* Next */}
      </main>
    </Layout>
  );
}
