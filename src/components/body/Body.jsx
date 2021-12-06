import React from "react";
import "./Body.scss";

import Card from "../card/Card";
import Paragraph from "../paragraph/Paragraph";

import {arrowIcon,
    thumbnail1,
    thumbnail2,
    thumbnail3,
    longbanner1,
    longbanner2,
    img1,
    img2,
    icon1,
    icon2,
    icon3,
    bigIcon1,
    bigIcon2,
    bigIcon3,
    bigIcon4} from "../../assets/images";
import Button from "../button/Button";


export default function Body() {
    
    return (
        <div className="body">
            <div className="body__tutorial">
                <div className="tutorial__content container">
                    <div className="tutorial__text">
                        <Paragraph className="text__style__5 orange font__main">Tutorial Guide</Paragraph>
                        <Paragraph className="text__style__1 text__spacing__1">영상 만들기, 어렵지 않아요</Paragraph>
                        <Paragraph className="text__style__2">나에게 맞는 템플릿,</Paragraph>
                        <Paragraph className="text__style__2">망설이지 말고 지금 직접 체험해보세요!</Paragraph>
                    </div> 
                    <div className="tutorial__card">
                        <Card bg={thumbnail1} className="card__main">
                            <div className="card__content">
                                <div className="">
                                <Paragraph className="text__style__3 text__spacing__2">첫번째</Paragraph>
                                    <Paragraph className="text__style__4">내 브랜드에 맞는</Paragraph>
                                    <Paragraph className="text__style__4">영상 만들기</Paragraph>
                                </div>
                                <div className="">
                                    <a href="/"><img src={arrowIcon} alt=""></img></a>
                                </div>
                            </div>
                        </Card>
                        <Card bg={thumbnail2} className="card__main">
                            <div className="card__content">
                                <div className="">
                                <Paragraph className="text__style__3 text__spacing__2">두번째</Paragraph>
                                    <Paragraph className="text__style__4">작업자들이 소통하며</Paragraph>
                                    <Paragraph className="text__style__4">템플릿 영상 작업</Paragraph>
                                </div>
                                <div className="">
                                    <a href="/"><img src={arrowIcon} alt=""></img></a>
                                </div>
                            
                            </div>
                        </Card>
                        <Card bg={thumbnail3} className="card__main">
                            <div className="card__content">
                                <div className="">
                                    <Paragraph className="text__style__3 text_spacing__2">세번째</Paragraph>
                                    <Paragraph className="text__style__4">단 하나 뿐인</Paragraph>
                                    <Paragraph className="text__style__4">내 브랜드 영상 제작 완료</Paragraph>
                                </div>
                                <div className="">
                                
                                    <a href="/"><img src={arrowIcon} alt=""></img></a>
                                </div>
                            
                            </div>
                        </Card>
                    </div>
                    
                </div>
            </div>
            <div className="body__banner" style={{backgroundImage: `url(${longbanner1})`}}>
                <div className="body__banner__content">
                    <Paragraph className="text__style__1 white banner__text">퀄리티있는 브랜딩, 비디온리 하세요</Paragraph>
                    <Paragraph className="text__style__2 white">나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요!</Paragraph>
                    <Button className="banner__btn btn-main bg-white">시작하기</Button>
                </div>
            </div>
            <div className="body__hero">
                <div className="body__hero__content container">
                    <div className="hero__content">
                        <Card bg={img1} className=""></Card>
                    </div>
                    <div className="hero__content" style={{textAlign:"left"}}>
                        <Paragraph className="text__style__5 font__main spacing__1">What is the videonly</Paragraph> 
                        <Paragraph className="text__style__1 white spacing__2">비디온리는 무엇인가요?</Paragraph>   
                        <Paragraph className="text__style__2 white spacing__4" style={{wordBreak: "keep-all"}}>세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다.
    우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록 컨설팅을 해줄 수 있습니다. 세계에서 하나 뿐인 템플릿, 직접 경험해보세요.</Paragraph>
                        <Button className="btn-main bg-black">시작하기</Button>
                    </div>
                </div>
            </div>
            <div className="body__hero" style={{backgroundColor: "white"}}>
                <div className="body__hero__content container" style={{backgroundColor: "white"}}>
                    <div className="hero__content" style={{order: "1"}}>
                        <Card bg={img2} className=""></Card>
                    </div>
                    <div className="hero__content" style={{textAlign: "right"}}>
                        <Paragraph className="text__style__5 font__main spacing__1 orange">How do I make a video</Paragraph> 
                        <Paragraph className="text__style__1 black spacing__2">영상제작은 어떻게하나요?</Paragraph>   
                        <Paragraph className="text__style__2 black spacing__4" style={{wordBreak: "keep-all"}}>오직 단 하나의 영상 템플릿을 만들기 때문에 절차가 어려울 것이라고 생각합니다. 하지만 우리는 특정 회사에서 원하는 템플릿을 만들고, 해당 템플릿을 사용해서 직접 더 나은 비디오를 만들 수 있도록 컨설팅을 합니다. 세계에서 단 하나뿐인 템플릿, 어렵게 생각하지 마세요. 비디 온리와 함께라면 
쉽고 간편하게 만들 수 있습니다.</Paragraph>
                        <Button className="btn-main bg-orange">시작하기</Button>
                    </div>
                </div>
            </div>
            <div className="body__facts">
                <div className="facts__content">
                    <Paragraph className="text__style__1 white spacing__4">체험 가능한 템플릿</Paragraph>
                    <div className="fact__list container">
                        <div className="fact__item">
                            <img src={icon1} alt="" style={{width: "2rem", paddingTop: "1.5rem"}}/>
                            <Paragraph className="text__style__2 spacing__1">사용중인 기업</Paragraph>
                            <Paragraph className="text__style__6 font__main">41</Paragraph>
                        </div> 
                        <div className="fact__item">
                            <img src={icon2} alt="" style={{width: "2rem", paddingTop: "1.5rem"}}/>
                            <Paragraph className="text__style__2 spacing__1">완료한 템플릿</Paragraph>
                            <Paragraph className="text__style__6 font__main">164</Paragraph>
                        </div> 
                        <div className="fact__item">
                            <img src={icon3} alt="" style={{width: "2rem", paddingTop: "1.5rem"}}/>
                            <Paragraph className="text__style__2 spacing__1">체험가능한  템플릿</Paragraph>
                            <Paragraph className="text__style__6 font__main">82</Paragraph>
                        </div> 
                    </div>
                    <Paragraph className="text__style__2 white spacing__3">나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!</Paragraph>
                    <Button className="btn-main bg-orange">시작하기</Button>
                </div>
                
            </div>
            <div className="body__banner" style={{backgroundImage: `url(${longbanner2})`}}>
            <div className="banner__content">
                    <Paragraph className="text__style__1 white banner__text">팀원들과 함께 공유하며 작업하세요</Paragraph>
                    <Paragraph className="text__style__2 white">작업량이 많을 때, 마감으로 정신없을 때!</Paragraph>
                    <Paragraph className="text__style__2 white">바쁠 때 주고받는 파일이 말썽이라면? 비디온리 하세요!</Paragraph>
                </div>
            </div>
            <div className="body__template container">
                <Paragraph className="text__style__1 spacing__3">한 눈에 보는 템플릿 절차</Paragraph>
                <Paragraph className="text__style__2">비디온리가 아직 고민되시나요?</Paragraph>
                <Paragraph className="text__style__2 spacing__5">비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.</Paragraph>
                <div className="template__list">
                    <div className="template__item">
                        <img src={bigIcon1} alt="big-Icon" style={{width: "8.9rem", paddingBottom: "0.2rem"}}/>
                        <Paragraph className="text__style__7 spacing__2 orange">이미지 찾기</Paragraph>
                        <Paragraph className="text__style__8">내 회사에 맞는 이미지를찾아 정합니다.</Paragraph>
                    </div>
                    <div className="template__item">
                        <img src={bigIcon2} alt="big-Icon" style={{width: "8.9rem", paddingBottom: "0.2rem"}}/>
                        <Paragraph className="text__style__7 spacing__2 orange">만들기</Paragraph>
                        <Paragraph className="text__style__8">정해둔 이미지에 맞춰
템플릿을 만듭니다.</Paragraph>
                    </div>
                    <div className="template__item">
                        <img src={bigIcon3} alt="big-Icon" style={{width: "8.9rem", paddingBottom: "0.2rem"}}/>
                        <Paragraph className="text__style__7 spacing__2 orange">정리하기</Paragraph>
                        <Paragraph className="text__style__8">회사와 비디온리가 소통을
통해 퀄리티를 높입니다.</Paragraph>
                    </div>
                    <div className="template__item">
                        <img src={bigIcon4} alt="big-Icon" style={{width: "8.9rem", paddingBottom: "0.2rem"}}/>
                        <Paragraph className="text__style__7 spacing__2 orange">제작 완료</Paragraph>
                        <Paragraph className="text__style__8">세상에 단 하나 뿐인
영상 제작 완료!</Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}