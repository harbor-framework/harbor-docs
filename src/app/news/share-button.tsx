"use client";

import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

export function ShareButton() {
  async function handleShare() {
    const url = window.location.href;

    await navigator.clipboard.writeText(url);
    toast.success("Link copied", {
      className: "font-mono",
    });
  }

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={handleShare}
      className="shrink-0 h-10 px-4"
    >
      <Link2 className="size-5" />
      Share
    </Button>
  );
}
