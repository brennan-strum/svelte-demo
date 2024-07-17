import { gql, GraphQLClient } from 'graphql-request';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
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
	const form = await superValidate(zod(productSchema));

	return { form };
};

export const actions = {
	add: async (event) => {
		const form = await superValidate(event, zod(productSchema));

		if (!form.valid) return fail(400, { form });

		const mutation = gql`
			mutation AddProduct($product: NewProduct!) {
				createProduct(product: $product) {
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
			product: {
				title: form.data.title,
				description: form.data.description,
				brand: form.data.brand,
				model: form.data.model,
				price: form.data.price
			}
		};

		await graphQLClient.request(mutation, variables);

		throw redirect(303, '/manage');
	}
};
