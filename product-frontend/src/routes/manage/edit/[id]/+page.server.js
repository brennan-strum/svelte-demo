import { gql, GraphQLClient } from 'graphql-request';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const endpoint = 'http://localhost:4000/';

const productSchema = z.object({
	id: z.string(),
	title: z.string().min(1, { message: 'please provide a title' }),
	description: z.string().min(1, { message: 'please provide a description' }),
	brand: z.string().min(1, { message: 'please provide a brand' }),
	model: z.string().min(1, { message: 'please provide a model' }),
	price: z.number().min(1, { message: 'please provide a price' })
});

const graphQLClient = new GraphQLClient(endpoint, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' }
});

export const load = async ({ params }) => {
	const query = gql`
		query GetProduct($id: ID!) {
			product(id: $id) {
				id
				title
				description
				brand
				model
				price
			}
		}
	`;
	const variables = {
		id: params.id
	};

	const { product } = await graphQLClient.request(query, variables);
	const form = await superValidate(product, zod(productSchema));

	if (!product) throw redirect(303, '/manage');

	return { form, product };
};

export const actions = {
	update: async (event) => {
		const form = await superValidate(event, zod(productSchema));

		if (!form.valid) return fail(400, { form });

		const mutation = gql`
			mutation UpdateProduct($id: ID!, $updates: EditProduct!) {
				updateProduct(id: $id, updates: $updates) {
					id
					title
					description
					brand
					model
					price
				}
			}
		`;

		const variables = {
			id: form.data.id,
			updates: {
				title: form.data.title,
				description: form.data.description,
				brand: form.data.brand,
				model: form.data.model,
				price: form.data.price
			}
		};

		const response = await graphQLClient.request(mutation, variables);

		return message(response, 'success');
	},
	delete: async (event) => {
		const form = await superValidate(event, zod(productSchema));
		if (!form.valid) return fail(400, { form });

		const mutation = gql`
			mutation DeleteProduct($id: ID!) {
				deleteProduct(id: $id) {
					id
					title
					description
					brand
					model
					price
				}
			}
		`;

		const variables = {
			id: form.data.id
		};

		await graphQLClient.request(mutation, variables);

		throw redirect(303, '/manage');
	}
};
