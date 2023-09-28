<script>
	import FavoriteItem from "../../components/FavoriteItem.svelte"
  import HomeLink from "../../components/HomeLink.svelte"
</script>

<svelte:head>
	<title>Weather app | Favorites</title>
</svelte:head>

<main>
  <h2>Favorites</h2>
  <section>
    <FavoriteItem location='madrid'/>
  </section>
  <HomeLink />
</main>

<style>
	main {
		padding: 32px;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
    background-color: var(--bg-main-color);
    background-image:  linear-gradient(#ffffff04 1px, transparent 1px), linear-gradient(to right, #ffffff04 1px, var(--bg-main-color) 1px);
    background-size: 20px 20px;
		gap: 24px;
    position: relative;
	}

  main::before{
    content: "";
    width: 320px;
    height: 320px;
    background: linear-gradient(125deg,rgb(0, 128, 251, 35%) 5%,rgb(0, 128, 251, 10%) 25%,rgb(0, 128, 251, 2%) 100%);
    filter: blur(75px);
    border-radius: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    z-index: 1;
  }

  main h2{
    color: var(--white-color);
		font-size: 2em;
		font-weight: 700;
    z-index: 50;
  }
  main section {
    width: 100%;
    display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
    gap: 6px;
    z-index: 50;
  }

  @media only screen and (min-width: 1280px) {
    main {
      padding-top: 86px;
      padding-bottom: 86px;
      gap: 42px;
    }
    main::before{
      width: 720px;
      height: 720px;
    }
    main h2{
      font-size: 3.6em;
    }
    main section {
      max-width: 960px;
      gap: 12px;
    }
  }
</style>
