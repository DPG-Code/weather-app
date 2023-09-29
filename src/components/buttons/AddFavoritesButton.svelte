<script>
	import HeartAdd from "../icons/HeartAdd.svelte"

  export let addToFavorites
</script>

<button on:click={addToFavorites}>
  <HeartAdd />
</button>

<style>
  button{
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white-tenue-color);
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 26px;
    left: 26px;
    transition: all 0.2s ease-in-out;
  }
  button:hover{
    color: #ffffff;
  }

  @media only screen and (min-width: 1280px) {
    button{
      width: 48px;
      height: 48px;
      top: 36px;
      left: 42px;
    }
  }
</style>
