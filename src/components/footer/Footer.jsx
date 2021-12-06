import React from "react";
import "./Footer.scss";

import {footerIcon1,
    footerIcon2,
    footerIcon3,
    footerIcon4} from "../../assets/images";
import Paragraph from "../paragraph/Paragraph";

export default function Footer() {
    return (
        <div className="footer">
                <div className="footer__content container" style={{paddingTop: '3rem'}}>
                    <div className="footer__left">
                        <div className="footer__title spacing__2">
                            <a href="/"><Paragraph className="text__style__9">이용약관</Paragraph></a>
                            <a href="/"><Paragraph className="text__style__9">개인정보처리방침</Paragraph></a>
                            <a href="/"><Paragraph className="text__style__9">고객센터</Paragraph></a>
                        </div>
                        <div className="footer__text">
                            <Paragraph className="text__style__10 gray-footer spacing__3">비디온리 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000
이메일 : test0101@vidionly.co.kr｜ FAX : 070-0000-0000
서울특별시 강남구 도산대로 8길 17 3층 </Paragraph>
                            <Paragraph className="text__style__10 gray-footer font__main">Copyright© VIDIONLY All rights reserved.</Paragraph>
                        </div>
                    </div>
                    <div className="footer__right">
                        <a href="/"><img src={footerIcon1} alt="icon logo" style={{width: "80%"}}/></a>
                        <a href="/"><img src={footerIcon2} alt="icon logo" style={{width: "80%"}}/></a>
                        <a href="/"><img src={footerIcon3} alt="icon logo" style={{width: "80%"}}/></a>
                        <a href="/"><img src={footerIcon4} alt="icon logo" style={{width: "80%"}}/></a>
                    </div>
                </div>
        </div>
    )
}