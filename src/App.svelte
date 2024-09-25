<script>
  import Router from "svelte-spa-router";
import Bracket from "./Bracket.svelte";
  import CoDBracket from "./CoDBracket.svelte";
  import Home from "./Home.svelte";

</script>
<main>
  <div class="title">
    <img src="hydroid.png" alt="" height="100">
    <div>
      <h1>NU Hydroid Olympians</h1>
      <div>Orion's Hunt</div>
    </div>
    <img src="nu_logo.png" alt="" height="78" style="padding: 12px;">
  </div>
</main>

<Router routes={{
  "/mlbb": Bracket,
  "/cod": CoDBracket,
  "*": Home,
}} />