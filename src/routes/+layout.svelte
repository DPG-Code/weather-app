<slot />

<style>
	:global(:root) {
    --bg-main-color: #0c0c0c;
		--day-main-color: #0080fb;
		--day-second-color: #00468a;
		--night-main-color: #031f46;
		--night-second-color: #032048;
		--bg-card: #c9e5ff;
		--white-color: #ffffff;
		--white-tenue-color: #ffffff9a;
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

  :global(::-webkit-scrollbar) {
    width: 8px;
	}
  :global(::-webkit-scrollbar-track) {
    background: var(--bg-main-color);
  }
	:global(::-webkit-scrollbar-thumb) {
    background: #ffffff3c;
		border-radius: 12px;
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: #ffffff7c;
	}
</style>
