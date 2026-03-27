import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Link
        href="/news/harbor-cookbook"
        className="block w-full border-b border-border bg-secondary text-secondary-foreground transition-all hover:bg-secondary/80"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3">
          <p className="font-mono text-sm">
            announcing the harbor cookbook: recipes for building harbor tasks and optimization loops.
          </p>
          <ArrowRight className="size-4" />
        </div>
      </Link>
      <main className="flex flex-1 flex-col justify-center space-y-12 max-w-6xl mx-auto px-4 py-6 sm:pt-12">
        <div className="space-y-6 flex flex-col items-center">
          <h1 className="text-8xl tracking-tighter font-code">
            harbor
          </h1>
          <p className="text-sm px-3 py-1 rounded-lg font-mono">
            from the makers of terminal-bench
          </p>
          <p className="text-lg text-muted-foreground text-center font-mono">
            a framework for evaluating and optimizing agents and models in
            container environments.
          </p>
          <CodeBlock lang="bash" code={`uv tool install harbor`} />
          <Button size="lg" asChild className="mt-6">
            <Link href="/docs">Read the docs</Link>
          </Button>
          <div className="w-full mt-12">
            <Link
              href="#harbor-action"
              className="flex flex-col items-center gap-2"
            >
              <p className="font-mono text-sm">see harbor in action</p>
              <ChevronDown className="animate-float size-4" />
            </Link>
            <div id="harbor-action" className="w-full mt-4 aspect-video">
              <iframe
                src="https://www.loom.com/embed/8c11f218c9fc4674bd659146af435627"
                allowFullScreen
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
