import { inngest } from "./client";
import prisma from "@/lib/db";

export const processTask = inngest.createFunction(
  { id: "process-task"},
  { event: "app/task.created" },
  async ({ event, step }) => {
    await step.sleep("fetching", "10s");
    await step.sleep("transcribing", "5s");
    await step.sleep("sending-to-Ai", "12s");

    await step.run("create-workflow", ()=>{
      return prisma.workflow.create({
        data:{
          name: "workflow-from-inngest"
        }
      })
    })
  }
);