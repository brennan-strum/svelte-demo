import { gql, GraphQLClient } from 'graphql-request';

export const load = async () => {
	const endpoint = 'http://localhost:4000/';
	const graphQLClient = new GraphQLClient(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	});
	const query = gql`
		query GetProducts {
			products {
				id
				title
				description
				brand
				model
				price
			}
		}
	`;
	const { products } = await graphQLClient.request(query);

	return {
		products
	};
};
