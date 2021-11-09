<script>
	import chartjs from 'chart.js/auto/';
	import { onMount } from 'svelte';

	let chartValues = [154, 4, 3, 4, 2, 3, 2, 4];
	let chartLabels = ['idk', 'Conti', 'KKona', 'lmao', 'pysa', 'MonkeyMan', 'Hesojam'];
	let ctx;
	let chartCanvas;
    let fill = true;

    

	onMount(async (promise) => {
		  ctx = chartCanvas.getContext('2d');
			var chart = new chartjs(ctx, {
				type: 'bar',
				data: {
						labels: chartLabels,
                        fill: fill,
						datasets: [{
								label: 'Targets',
								backgroundColor: 'rgb(187, 134, 252)',
								borderColor: 'rgb(255, 255, 255)',
                                color: 'rgb(255, 255, 255)',
								data: chartValues,
						}]
				}
		});

	});

</script>
<style>

    canvas {
        width: 100%;
        height: auto;
        margin-top: 4rem;
    }
</style>
<canvas bind:this={chartCanvas} id="myChart"></canvas>
