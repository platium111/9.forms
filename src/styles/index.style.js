import styled from "styled-components";
import { Wrapper } from "../components";
import { randomColor } from "../utils";

export const TestWrapperStyled = styled(Wrapper)`
  border: 2px solid ${({ color }) => color};
`;
