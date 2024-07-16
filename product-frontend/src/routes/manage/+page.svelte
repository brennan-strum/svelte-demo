<script>
	export let data;
	const { products } = data;

	const editProduct = (id) => {
		window.location.href = `/manage/${id}`;
	};
</script>

<div class="mt-20 mx-10">
	<h1 class="text-4xl mb-5">Manage Products</h1>

	<div class="overflow-x-auto bg-base-300 rounded-lg mb-10">
		<table class="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>description</th>
					<th>brand</th>
					<th>model</th>
					<th>price</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each products as product}
					<tr>
						<td>{product.title}</td>
						<td>{product.description}</td>
						<td>{product.brand}</td>
						<td>{product.model}</td>
						<td>${product.price}</td>
						<td>
							<button class="btn btn-primary" on:click={() => editProduct(product.id)}>edit</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
