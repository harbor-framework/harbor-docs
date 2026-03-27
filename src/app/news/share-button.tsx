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
      size="sm"
      onClick={handleShare}
      className="shrink-0"
    >
      <Link2 className="size-4" />
      Share
    </Button>
  );
}
