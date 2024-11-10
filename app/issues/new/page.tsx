import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("../IssueForm"), { ssr: false });

export default function NewIssuePage() {
  return (
    <>
      <IssueForm />
    </>
  );
}
