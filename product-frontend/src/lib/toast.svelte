<script>
	export let message;
	let show = true;
	let timer;
	let duration = 1000;

	const initHide = () => {
		timer = setTimeout(hide, duration);
	};

	const hide = () => {
		show = false;
		clearTimeout(timer);
	};

	initHide();
</script>

<div class="toast transition-opacity duration-300 delay-300" class:opacity-0={!show}>
	<div class="alert alert-info">
		<span>{message}</span>
	</div>
</div>
