import React from "react";
import { HeaderContainer, SectionHeader } from "../componentsStyle/containers";
import { UlHeader, LiHeader, AHeader } from "../componentsStyle/headerStyle";

function Header() {
    return (
        <SectionHeader>
            <HeaderContainer>
                <a href="#"><img src="./images/logo.svg" alt="Логотип наса" /></a>
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
                    </UlHeader>
                </nav>
            </HeaderContainer>
        </SectionHeader>
    );
}

export default Header;