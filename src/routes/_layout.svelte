<script>
	import {numItemsInCart} from '../stores.js';
	import TopAppBar, {Row, Section} from '@smui/top-app-bar';
	import IconButton, {Icon} from '@smui/icon-button';

	let itemsInCart;

	const unsubscribe = numItemsInCart.subscribe(value => {
		itemsInCart = value;
	})
</script>

<style>
	@import "@material/elevation/mdc-elevation";

	main {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	h1 {
		color: black;
		font-family: 'Roboto';
		margin: 0;
	}

	.main-title {
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title-text {
		font-weight: 300;
		font-size: 3em;
	}

	.search-icon-button {
		display: block;
	}

	@media only screen and (min-width: 801px) {
		.main-title {
			margin-top: 10vh;
			margin-bottom: 5vh;
		}

		.search-icon-button {
			position: absolute;
			top: 5px;
			right: 5px;
		}
	}

	@media only screen and (max-width: 800px) {
		.main-title {
			justify-content: space-between;
			height: 50px;
			margin-bottom: 5vh;
		}

		.title-text {
			margin-left: 20px;
			font-size: 1.5em;
		}
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

<div class="main-title mdc-elevation--z1">
	<h1 class='title-text'>System<strong>GET</strong></h1>
	<a class='search-icon-button' href='/search'>
		<IconButton class="material-icons" title='Search Items'>
			<img alt='search items' src='/search.svg'/>
		</IconButton>
	</a>
</div>

<main>
	<slot></slot>
</main>
