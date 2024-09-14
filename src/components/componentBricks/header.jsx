import React from "react";
import { HeaderContainer } from "../componentsStyle/globalStyles/containers";
import { UlHeader, LiHeader, AHeader } from "../componentsStyle/global/headerStyles/headerStyle";
import { SectionHeader } from "../componentsStyle/globalStyles/sections";
import { Logo } from "../componentsImages/imagesLogo";

function Header() {
    return (
        <SectionHeader>
            <HeaderContainer>
                <a href="#"><Logo /></a>
                <nav>
                    <UlHeader>
                        <LiHeader>
                            <AHeader href="#">Новости</AHeader>
                        </LiHeader>
                        <LiHeader>
                            <AHeader href="#">Музей</AHeader>
                        </LiHeader>
                        <LiHeader>
                            <AHeader href="#">Рофланы</AHeader>
                        </LiHeader>
                        <LiHeader>
                            <AHeader href="#">О нас</AHeader>
                        </LiHeader>
                    </UlHeader>
                </nav>
            </HeaderContainer>
        </SectionHeader>
    );
}

export default Header;