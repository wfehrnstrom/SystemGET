<script>
	import * as sapper from '../node_modules/@sapper/app';
	try {
		sapper.goto('./age');
	}
	catch(error){
		console.log('error');
	}
</script>

<svelte:head>
	<title>SystemGET</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet">
</svelte:head>
