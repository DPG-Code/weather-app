<script>
  import Open from '../icons/Open.svelte'
  import X from '../icons/X.svelte'

  export let location
  export let deleteItem
</script>

<div>
  <a href="/">
    {location}
    <Open />
  </a>
  <button on:click={() => deleteItem(location)}>
    <X />
  </button>
</div>

<style>
  div{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 36px;
  }
  a{
    padding: 12px 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    font-size: 1em;
    font-weight: 400;
    background-color: #ffffff0c;
    border-radius: 16px;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  a:hover{
    background-color: #ffffff1c;
  }
  
  div button {
    color: #ffffff;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media only screen and (min-width: 1280px) {
    a{
      padding: 24px 52px;
      font-size: 2em;
      border-radius: 26px;
    }
  }
</style>