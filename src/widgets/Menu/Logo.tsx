import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  appName: string;
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .desktop-name {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const StyledAppName = styled.span<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 2rem;
  color: ${({ isDark }) => (isDark ? "#FFF" : "#000")};
`;

const Logo: React.FC<Props> = ({ appName, isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoIcon className="desktop-icon" />
      <StyledAppName className="desktop-name" isDark={isDark}>
        {appName}
      </StyledAppName>
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label={`${appName} home page`}>
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label={`${appName} home page`}>
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
