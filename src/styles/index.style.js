import styled from "styled-components";
import { Wrapper } from "../components";

export const TestWrapperStyled = styled(Wrapper)`
  border: 2px solid ${({ color }) => color};
`;
