<script>
  import Open from '../components/icons/Open.svelte'

  export let location
</script>

<a href="/">
  {location}
  <Open />
</a>

<style>
  a{
    padding: 12px 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
    font-weight: 400;
    color: #ffffff;
    background-color: #ffffff0c;
    border-radius: 16px;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  a:hover{
    background-color: #ffffff1c;
  }

  @media only screen and (min-width: 1280px) {
    a{
      padding: 24px 52px;
      font-size: 2em;
      border-radius: 26px;
    }
  }
</style>