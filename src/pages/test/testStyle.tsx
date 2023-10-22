import styled from "@emotion/styled";
import { css } from "@emotion/react";

export default function TestStylePage() {
  return (
    <Area>
      TestStylePage <div css={{ color: "red" }}>test</div>
    </Area>
  );
}

const Area = styled.div`
  border: 1px solid red;
`;
