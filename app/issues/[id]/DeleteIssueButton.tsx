"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteIssueButton({ issueId }: { issueId: number }) {
  const router = useRouter();
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
              <Button
                color="red"
                onClick={async () => {
                  await axios.delete("/api/issues/" + issueId);
                  router.push("/issues");
                  router.refresh();
                }}
              >
                Delet issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
}
