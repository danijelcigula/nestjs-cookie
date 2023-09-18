<script>
    const BASE_URL = 'http://localhost:3000';
    const COOKIE_URL = `${BASE_URL}/cookies`;
    const COOKIE_IMAGE_URL = `${COOKIE_URL}/image`;

    let cookiesLoaded = false;
    let cookies = JSON.stringify({});
    async function setCookie() {
        cookiesLoaded = false;
        const response = await fetch(
            COOKIE_URL,
            {
                method: 'POST',
                credentials: 'include'
            }
        );
    }

    async function getCookie() {
        const response = await fetch(
            COOKIE_URL,
            {
                method: 'GET',
                credentials: 'include'
            }
        );
        cookiesLoaded = true;
        cookies = JSON.stringify(await response.json());
    }
</script>

<h1>Welcome to SvelteKit</h1>
<div>
    <button on:click={setCookie}>Set cookie</button>
    <button on:click={getCookie}>Get cookie</button>

    {#if cookiesLoaded}
        <br />
        <br />
        <code>{cookies}</code>
    {/if}

    <img src="{COOKIE_IMAGE_URL}" alt="cookie" />

</div>
