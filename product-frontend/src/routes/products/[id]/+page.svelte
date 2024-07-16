<script>
	export let data;
	const { product } = data;

	const isActiveRating = (val, idx) => {
		const cssClass = 'mask mask-star-2 bg-green-500 w-5 h-5';
		return val > idx ? cssClass : `${cssClass} opacity-10`;
	};
</script>

<div class="flex flex-col items-center mb-10">
	<div class="container mt-20 mx-10">
		<h1 class="text-4xl">{product.title}</h1>
	</div>
	<div class="bg-base-300 container mx-10 mt-10 p-5 rounded-lg w-full">
		<div class="flex w-full">
			<div class="max-w-80 mr-10">
				<img
					class="rounded-lg"
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</div>
			<div class="flex flex-col justify-between w-full">
				<div>
					<p class="text-2xl mb-4">{product.description}</p>
					<p class="text-lg">{product.model}</p>
					<p class="text-lg">{product.brand}</p>
				</div>
				<div>
					<div class="text-right">
						<p class="text-3xl">${product.price}</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container mt-20 mx-10">
		<h1 class="text-2xl">Reviews</h1>
	</div>

	{#each product.reviews as review}
		<div class="bg-base-300 container mx-10 mt-10 rounded-lg p-5">
			<div class="mb-5 text-left w-full">
				<div class="rating">
					{#each { length: 5 } as _, idx}
						<div class={isActiveRating(review.rating, idx)}></div>
					{/each}
				</div>
			</div>
			<p>{review.content}</p>
			<div class="mt-5 text-right w-full">
				<div class="badge badge-accent">{review.user}</div>
			</div>
		</div>
	{/each}
</div>
