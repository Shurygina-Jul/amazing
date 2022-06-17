import tw, { styled } from "twin.macro";

export const StyledButton = styled.button`
  ${tw` p-[12px] min-w-[100px]`};

  &:disabled,
  [disabled],
  :disabled:hover {
    ${tw` cursor-auto bg-transparent opacity-30`};
  }
`;
