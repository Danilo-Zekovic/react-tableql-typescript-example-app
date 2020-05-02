import { DocumentNode } from "graphql";

export const ALL_FILMS = `{
  allFilms {
    episodeId
  	title
    releaseDate
	}
}` as DocumentNode & string // TODO this is not a good solution

export const ALL_PEOPLE = `
{
  allPersons {
    id
    name
    gender
	}
}
` as DocumentNode & string // TODO this is not a good solution