import tw, { styled } from "twin.macro";

export const StyledButton = styled.button`
  ${tw` px-4 py-1 min-w-[100px] rounded-sm`};

  &:disabled,
  [disabled],
  :disabled:hover {
    ${tw` cursor-auto bg-transparent opacity-30`};
  }
`;
