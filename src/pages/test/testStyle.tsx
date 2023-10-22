import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function TestStylePage() {
  return (
    <Area>
      TestStylePage{" "}
      <div
        css={css`
          color: blue;
        `}
      >
        test
      </div>
    </Area>
  );
}

const Area = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid red;
  color: purple;
`;