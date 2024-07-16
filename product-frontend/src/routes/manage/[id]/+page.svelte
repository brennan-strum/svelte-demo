<script>
	import { enhance } from '$app/forms';
	import { superForm } from 'sveltekit-superforms/client';

	import Toast from '../../../lib/toast.svelte';

	export let data;

	const { product } = data;
	const { form, errors, message } = superForm(data.form);
</script>

<div class="mt-20 mx-10">
	<header class="text-4xl mb-5">Manage: {product.title}</header>
	<form id="product" method="POST" action="?/update" use:enhance>
		<div class="flex justify-end mb-5">
			<button formaction="?/delete" class="btn btn-secondary ml-5">Delete</button>
		</div>
		<input name="id" type="hidden" bind:value={$form.id} />
		<label for="title" class="text-lg">Title:</label>
		<div class="mb-5">
			<input
				name="title"
				type="text"
				class="input input-bordered input-primary w-full"
				bind:value={$form.title}
			/>
			{#if $errors.title}
				<small>{$errors.title}</small>
			{/if}
		</div>

		<label for="description" class="text-lg">Description:</label>
		<div class="mb-5">
			<input
				name="description"
				type="text"
				class="input input-bordered input-primary w-full"
				bind:value={$form.description}
			/>
			{#if $errors.description}
				<small>{$errors.description}</small>
			{/if}
		</div>

		<label for="brand" class="text-lg">Brand:</label>
		<div class="mb-5">
			<input
				name="brand"
				type="text"
				class="input input-bordered input-primary w-full"
				bind:value={$form.brand}
			/>
			{#if $errors.brand}
				<small>{$errors.brand}</small>
			{/if}
		</div>

		<label for="model" class="text-lg">Model:</label>
		<div class="mb-5">
			<input
				name="model"
				type="text"
				class="input input-bordered input-primary w-full"
				bind:value={$form.model}
			/>
			{#if $errors.model}
				<small>{$errors.model}</small>
			{/if}
		</div>

		<label for="price" class="text-lg">Price:</label>
		<div class="mb-5">
			<input
				name="price"
				type="text"
				class="input input-bordered input-primary w-full"
				bind:value={$form.price}
			/>
			{#if $errors.price}
				<small>{$errors.price}</small>
			{/if}
		</div>

		<div class="flex justify-end">
			<button class="btn btn-accent ml-5" type="submit">Save</button>
		</div>
	</form>
</div>

{#if $message}
	<Toast message={$message} />
{/if}
