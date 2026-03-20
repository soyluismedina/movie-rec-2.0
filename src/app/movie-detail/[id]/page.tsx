import ListOfMovies from "../../../components/ListOfMovies";
import DetailView from "../../../modules/details/details";
import { getMovieDetail, getSimilarMovies } from "../../../services";

export default async function MoviesDetail(props: { params: { id: string } }) {
  const params = await props.params;
  const [movieDetails, similarMovies] = await Promise.all([
    getMovieDetail(params.id),
    getSimilarMovies(params.id),
  ]);

  return (
    <main>
      <DetailView movieDetails={movieDetails} />
      <ListOfMovies title="Similar Movies" movies={similarMovies} />
    </main>
  );
}
