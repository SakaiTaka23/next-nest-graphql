import { join } from 'path';

import { GraphQLDefinitionsFactory } from '@nestjs/graphql';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: [`${__dirname}/**/*.graphql`],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
});
