<script>
	export let segment;
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

<div class="main-title" style="display: flex; width: 100vw;
	height: 200px; align-items: center; justify-content: center">
	<h1 class='title-text'>System<strong>GET</strong></h1>
</div>

<main>
	<slot></slot>
</main>
