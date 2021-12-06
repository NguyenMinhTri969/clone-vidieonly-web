import React from "react";
import Header from "../../components/header/Header";
import Slide from "../../components/slide/Slide";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Slide/>
            <Body />
            <Footer />
        </div>
    )
}