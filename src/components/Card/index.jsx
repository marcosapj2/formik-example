import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Title } from "../Title";
import { StyledCard, Container } from "./styled";

export function Card({ children, height, dist, color, title, ...props }) {
  return (
    <StyledCard height={height} dist={dist} color={color} {...props}>
      <div style={{ width: "100%" }}>
        {title && <Title className="mg-10">{title}</Title>}
      </div>
      {children}
    </StyledCard>
  );
}
export const CardTitle = ({ children, title, ...props }) => (
  <Container {...props}>
    {title && <Title className="mg-10">{title}</Title>}
    {children}
  </Container>
);

export const CardBody = ({ children }) => <Container>{children}</Container>;

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

CardTitle.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

CardBody.propTypes = {
  children: PropTypes.node
};

export default Card;
