import { Text } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ErrorMessage({ children }: Props) {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
}
