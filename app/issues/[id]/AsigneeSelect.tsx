"use client";
import { Select } from "@radix-ui/themes";

export default function AsigneeSelect() {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Asign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value={"1"}>User</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
