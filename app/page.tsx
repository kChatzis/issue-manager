import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import { Grid } from "@radix-ui/themes";
import prisma from "@/prisma/client";

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <Grid columns={"1"} gap="5">
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      <LatestIssues />
    </Grid>
  );
}
