import type { Metadata } from "next";

type Props = {
  params: Promise<{ movie: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).movie;

  return {
    title: `Search for "${slug}"`,
    description: `Page of search of the movie ${slug}`,
  };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
