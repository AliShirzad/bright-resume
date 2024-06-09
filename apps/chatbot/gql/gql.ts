/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query signInWithOAuthToken {\n    signInWithOAuthToken {\n      id\n      name\n      token\n      username\n      email\n      picture\n    }\n  }\n": types.SignInWithOAuthTokenDocument,
    "\n  mutation signInAuth($signInAuthInputs: SignInAuthInputsGQL!) {\n    signIn(signInAuthInputs: $signInAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n": types.SignInAuthDocument,
    "\n  mutation signUpAuth($signUpAuthInputs: SignUpAuthInputsGQL!) {\n    signUp(signUpAuthInputs: $signUpAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n": types.SignUpAuthDocument,
    "\n  query getResumes(\n    $getResumesResumeArgs: GetResumesResumeArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getResumes(\n      getResumesResumeArgs: $getResumesResumeArgs\n      paginationArgs: $paginationArgs\n    ) {\n      edges {\n        id\n        userId\n        name\n      }\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        totalPages\n        currentPage\n      }\n    }\n  }\n": types.GetResumesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query signInWithOAuthToken {\n    signInWithOAuthToken {\n      id\n      name\n      token\n      username\n      email\n      picture\n    }\n  }\n"): (typeof documents)["\n  query signInWithOAuthToken {\n    signInWithOAuthToken {\n      id\n      name\n      token\n      username\n      email\n      picture\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signInAuth($signInAuthInputs: SignInAuthInputsGQL!) {\n    signIn(signInAuthInputs: $signInAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation signInAuth($signInAuthInputs: SignInAuthInputsGQL!) {\n    signIn(signInAuthInputs: $signInAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signUpAuth($signUpAuthInputs: SignUpAuthInputsGQL!) {\n    signUp(signUpAuthInputs: $signUpAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation signUpAuth($signUpAuthInputs: SignUpAuthInputsGQL!) {\n    signUp(signUpAuthInputs: $signUpAuthInputs) {\n      id\n      name\n      username\n      email\n      token\n      picture\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getResumes(\n    $getResumesResumeArgs: GetResumesResumeArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getResumes(\n      getResumesResumeArgs: $getResumesResumeArgs\n      paginationArgs: $paginationArgs\n    ) {\n      edges {\n        id\n        userId\n        name\n      }\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        totalPages\n        currentPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query getResumes(\n    $getResumesResumeArgs: GetResumesResumeArgsGQL!\n    $paginationArgs: PaginationArgsGQL!\n  ) {\n    getResumes(\n      getResumesResumeArgs: $getResumesResumeArgs\n      paginationArgs: $paginationArgs\n    ) {\n      edges {\n        id\n        userId\n        name\n      }\n      pageInfo {\n        totalEdges\n        edgeCount\n        edgesPerPage\n        totalPages\n        currentPage\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;