import { EntityMetadataMap } from "@ngrx/data";

const entityMetadata: EntityMetadataMap = {
  Ponies: {},
  Races: {}
}

const pluralNames = {
  Ponies: 'Ponies',
  Races: 'Races'
}

export const entityMetadataConfig = {
  entityMetadata,
  pluralNames
}