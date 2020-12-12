import styled, {css} from "styled-components";

const Width = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;
  ${Width}
`;
export const CheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameSpan = styled.span`
  ${Width}
`;

export const QuantitySpan = styled.span`
  ${Width}
  display: flex;
  align-content: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  padding: 0 10px;
`;

export const PriceSpan = styled.span`
  ${Width}
`;

export const RemoveButton = styled.span`
  cursor: pointer;
  padding-left: 12px;
`;
