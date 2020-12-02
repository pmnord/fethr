import styled from "styled-components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }
`;

export const Total = styled.div`
  margin: 30px 0 0 auto;
  font-size: 36px;
`;

export const TestWarning = styled.div`
  text-align: center;
  margin: 20px auto;
  font-size: 24px;
  color: red;
`;

export const StripeCheckoutButtonStyled = styled(StripeCheckoutButton)`
  margin: 10px 0px 10px auto;
`;
