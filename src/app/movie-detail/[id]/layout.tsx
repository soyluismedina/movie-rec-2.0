import { getMovieDetail } from "@services/index";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const slug = (await params).id;
  const movie = await getMovieDetail(slug);

  return {
    title: `Movie Detail of "${movie.title}"`,
    description: `Page of detail of the movie ${movie.title}`,
  };
};

export default function Layout({ children }) {
  return <main>{children}</main>;
}
