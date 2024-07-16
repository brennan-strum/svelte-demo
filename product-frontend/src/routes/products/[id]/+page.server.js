import { gql, GraphQLClient } from 'graphql-request';

export const load = async ({ params }) => {
	const endpoint = 'http://localhost:4000/';
	const graphQLClient = new GraphQLClient(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	});
	const query = gql`
		query GetProduct($id: ID!) {
			product(id: $id) {
				title
				description
				brand
				model
				price
				reviews {
					user
					content
					rating
				}
			}
		}
	`;
	const variables = {
		id: params.id
	};
	const { product } = await graphQLClient.request(query, variables);

	return {
		product
	};
};
