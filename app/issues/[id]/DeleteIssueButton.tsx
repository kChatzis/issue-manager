"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export default function DeleteIssueButton({ issueId }: { issueId: number }) {
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>Delete issue?</AlertDialog.Description>
          <Flex gap={"3"}>
            <AlertDialog.Cancel>
              <Button>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red">Delet issue</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
}
