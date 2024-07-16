<script>
	export let product;
</script>

<div class="card bg-base-300 w-96 shadow-xl">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
			alt="Shoes"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{product.title}</h2>
		<p>{product.description}</p>
		<div class="card-actions justify-end">
			<a class="btn btn-primary" href={`/products/${product.id}`}>More Info</a>
		</div>
	</div>
</div>
