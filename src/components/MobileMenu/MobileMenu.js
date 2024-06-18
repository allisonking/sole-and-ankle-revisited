/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper
      isOpen={isOpen}
      onDismiss={onDismiss}
      style={{ background: "hsla(220, 5%, 40%, 0.8)" }}
    >
      <Content aria-label="Menu">
        <Spacer />
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden> Dismiss menu </VisuallyHidden>
        </CloseButton>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Spacer>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Spacer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  background: white;
  position: absolute;
  right: 0;
  width: min(80vw, 400px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: 16px;
  top: 24px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--color-gray-900);
  text-transform: uppercase;
  font-size: ${18 / 16}rem;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`;

const Spacer = styled.div`
  flex: 1;
  align-content: flex-end;
`;

export default MobileMenu;
