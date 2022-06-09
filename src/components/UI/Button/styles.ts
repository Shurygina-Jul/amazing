import tw, { styled } from "twin.macro";

export const StyledButton = styled.button`
  ${tw`border-2 p-[12px] min-w-[100px]`};

  &:disabled,
  [disabled],
  :disabled:hover {
    ${tw`text-yellow cursor-auto bg-transparent opacity-30`};
  }
`;
