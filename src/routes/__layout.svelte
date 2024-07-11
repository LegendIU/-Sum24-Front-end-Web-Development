<!-- src/routes/__layout.svelte -->
<script>
  export let segment;
</script>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <slot></slot>
</main>

<footer>
  <p>&copy; 2024 Your Name</p>
</footer>

<style>
  header, footer {
    padding: 1rem;
    background: #333;
    color: white;
  }
  nav a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
</style>
