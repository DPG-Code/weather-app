<script>
  import Heart from "./icons/Heart.svelte";
</script>

<a href="/favorites">
  <Heart />
</a>

<style>
  a{
    padding: 8px;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    background-color: var(--white-color);
    border-radius: 100%;
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 100;
  }

  @media only screen and (min-width: 1280px) {
    a{
      padding: 12px;
      width: 76px;
      height: 76px;
      bottom: 64px;
      right: 64px;
    }
  }
</style>