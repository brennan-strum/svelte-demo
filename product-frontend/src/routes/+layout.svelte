<script>
  import Navbar from "../lib/navbar.svelte";
  import "tailwindcss/tailwind.css";
</script>


<header>
  <Navbar />
</header>

<main>
  <slot></slot>
</main>

<footer></footer>