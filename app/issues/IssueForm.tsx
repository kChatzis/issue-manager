"use client";
import { Button, Callout, Text, TextField, Select } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { issueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";

type IssueFormData = z.infer<typeof issueSchema>;

interface Props {
  issue?: Issue;
}

export default function IssueForm({ issue }: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            if (issue) await axios.patch("/api/issues/" + issue.id, data);
            else await axios.post("/api/issues", data);
            router.push("/issues");
            router.refresh();
          } catch (error) {
            setSubmitting(false);
            setError("An unexpected error occurred.");
          }
        })}
      >
        <TextField.Root
          placeholder="Title"
          defaultValue={issue?.title}
          {...register("title")}
        ></TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Controller
          name="status"
          control={control}
          defaultValue={issue?.status || "OPEN"}
          render={({ field: { onChange, value } }) => (
            <Select.Root value={value} onValueChange={onChange}>
              <Select.Trigger placeholder="Status" />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Status:</Select.Label>
                  <Select.Item value="OPEN">OPEN</Select.Item>
                  <Select.Item value="IN_PROGRESS">IN_PROGRESS</Select.Item>
                  <Select.Item value="CLOSED">CLOSED</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          )}
        />
        <Button disabled={isSubmitting}>
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}
