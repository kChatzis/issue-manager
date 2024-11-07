import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}

export default function IssueStatusBadge({ status }: Props) {
  if (status === "OPEN") return <Badge color="red">{status}</Badge>;
  if (status === "IN_PROGRESS") return <Badge color="yellow">{status}</Badge>;
  if (status === "CLOSED") return <Badge color="green">{status}</Badge>;
}
