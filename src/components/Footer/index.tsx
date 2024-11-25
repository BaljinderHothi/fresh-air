import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  FooterContainer,
  NavLink,
  LogoContainer,
  Extra,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
      <Container border={true}>
  <Row
    justify="center" // Centers the row horizontally
    align="middle"   // Centers the content vertically
    style={{ paddingTop: "1rem", textAlign: "center" }} // Adds padding and centers text
  >
    <FooterContainer style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      <SocialLink href="https://github.com/BaljinderHothi" src="github.svg" />
      <SocialLink href="https://www.linkedin.com/in/baljinder-hothi/" src="linkedin.svg" />
      <SocialLink href="http://baljinderhothi.github.io/" src="website.svg" />
    </FooterContainer>
  </Row>
</Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
