import placeholder from "../placeHolder.PNG";

export function getMovieImg(path, width) {
  return path ? "https://image.tmdb.org/t/p/w300" + width + path : placeholder;
}
