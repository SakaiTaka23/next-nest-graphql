import { writeFileSync } from 'fs';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { print } from 'graphql';

const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);
const printedTypeDefs = print(typeDefs);
writeFileSync('joined.graphql', printedTypeDefs);
