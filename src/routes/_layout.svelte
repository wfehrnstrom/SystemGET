<script>
	import {numItemsInCart} from '../stores.js';

	let itemsInCart;

	const unsubscribe = numItemsInCart.subscribe(value => {
		itemsInCart = value;
	})
</script>

<style>
	main {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	h1 {
		color: black;
		font-family: 'Roboto';
	}

	.title-text {
		font-weight: 300;
		font-size: 3em;
	}
</style>

{#if itemsInCart > 0}
	<a style='text-decoration: none; display: block; position: absolute; right: 30px; top: 30px; display: flex; justify-content: space-between; width: 40px'
		 href='cart'>
		{itemsInCart}
		<div class='add'>
			<img alt='add to shopping list' src='/add.svg'/>
		</div>
	</a>
{/if}

<div class="main-title" style="display: flex; width: 100vw;
	height: 200px; align-items: center; justify-content: center">
	<h1 class='title-text'>System<strong>GET</strong></h1>
</div>

<main>
	<slot></slot>
</main>
