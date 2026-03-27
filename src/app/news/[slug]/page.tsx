import { newsSource } from "@/lib/source";
import { DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { ShareButton } from "../share-button";

export default async function NewsPost(
  props: PageProps<"/news/[slug]">
) {
  const params = await props.params;
  const page = newsSource.getPage([params.slug]);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <article>
        <div className="font-mono">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-normal">{page.data.title}</h1>
            <ShareButton />
          </div>
          <p className="mt-2 text-fd-muted-foreground">
            {new Date(page.data.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {page.data.author && ` · ${page.data.author}`}
          </p>
          {page.data.description && (
            <p className="mt-2 text-sm text-fd-muted-foreground">
              {page.data.description}
            </p>
          )}
        </div>
        <div className="mt-8">
          <DocsBody>
            <MDX components={getMDXComponents({})} />
          </DocsBody>
        </div>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return newsSource.generateParams().map((params) => ({
    slug: params.slug?.[0] ?? "",
  }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">
): Promise<Metadata> {
  const params = await props.params;
  const page = newsSource.getPage([params.slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
