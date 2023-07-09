#!/bin/bash

source .env
FILE=graphql/schema.graphql
rm -rf $FILE
pnpm gq $HASURA_GRAPHQL_ENDPOINT/v1/graphql -H "X-Hasura-Admin-Secret: $HASURA_GRAPHQL_ADMIN_SECRET" --introspect > $FILE