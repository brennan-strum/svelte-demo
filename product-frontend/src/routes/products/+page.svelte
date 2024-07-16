<script>
	import ProductItem from '../../lib/productItem.svelte';

	export let data;
	const { products } = data;
</script>

<div class="flex flex-col items-center mb-10">
	<div class="container mt-20 mx-10">
		<h1 class="text-4xl">Products</h1>
	</div>

	<div class="container mt-10 flex flex-wrap justify-evenly">
		{#each products as product}
			<div class="m-5">
				<ProductItem {product} />
			</div>
		{/each}
	</div>
</div>
