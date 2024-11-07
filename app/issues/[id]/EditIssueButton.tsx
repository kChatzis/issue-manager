import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { PiNotePencil } from "react-icons/pi";

export default function EditIssueButton({ issueId }: { issueId: number }) {
  return (
    <Button>
      <PiNotePencil />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
}
