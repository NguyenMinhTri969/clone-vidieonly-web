import React from 'react';
import "./Header.scss";

import {logo, mainBanner} from '../../assets/images';
import Button from '../button/Button';
import Paragraph from '../paragraph/Paragraph';

export default function Header() {
    const headerStyle = {
        backgroundImage:`url(${mainBanner})`,
        height: '560px'
    }
    return (
        <div style={headerStyle} className="header">
            <div className="container header__nav">
                <div className="header__logo">
                    <img src ={logo} alt=""/>
                </div>
                <div className="header__button">
                    <Button className="btn-second">LOGIN</Button>
                    <Button style={{marginLeft: '0.5rem'}} className="btn-second">JOIN</Button>
                </div>
            </div>
            <div className="container header__content">
                <div className="header__text">
                    <Paragraph className="text__header white">비디온리는</Paragraph>
                    <Paragraph className="text__header white spacing__5">오직 당신의 브랜드만를 위해 
템플릿을 만듭니다</Paragraph>
                    {/* <span>비디온리는</span>
                    <Title className="title-header">
오직 당신의 브랜드만를 위해 
템플릿을 만듭니다</Title> */}
                    <Paragraph className="text__style__2 white spacing__6">나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.</Paragraph>

                </div>
                <div className="content__button">
                    <Button className="btn-main">시작하기</Button>
                </div>
            </div>  
        </div>
    )
}