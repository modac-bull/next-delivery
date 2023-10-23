import TempLink from "@/components/pages/temp/TempLink";
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";

export default function TempLinkPage() {
  return (
    <Area>
      purple?
      <TempLink />
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
