<script>
    import { enhance } from "$app/forms"
    import Button from "$lib/button.svelte"

    export let form

    $: console.log(form)
</script>

<div class="container">
    <h2>Contact us</h2>

    {#if form?.success}
    <p>{form?.status || ""}</p>

    {:else} 

    <form method="POST" use:enhance>
        <div class="form-group">
            <label for="name" class="col-md-3 control-label">Name</label>
            <div class="col-md-9">
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                class="form-control"
                value={form?.name || ""}
                class:error={form && !form?.name}
                />
            </div>
        </div>
    
        <div class="form-group">
            <label for="mail" class="col-md-3 control-label">Your E-mail</label>
            <div class="col-md-9">
                <input
                type="text"
                name="mail"
                id="mail"
                placeholder="Your E-mail"
                class="form-control"
                value={form?.mail || ""}
                class:error={form && !form?.mail}
                />
            </div>
        </div>
    
        <div class="form-group">
            <label for="message" class="col-md-3 control-label">Your message</label>
            <div class="col-md-9">
                <textarea
                name="message"
                id="message"
                placeholder="Please enter your message"
                class="form-control"
                rows="5"
                value={form?.message || ""}
                class:error={form && !form?.message}
                />
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-md-12">
                <Button type="submit">Submit</Button>
            </div>
        </div>
    </form>
    {/if}
</div>


<style>
    .container {
        padding: 2em 0;
    }
    h2 {
        font-weight: 500;
        font-size: 2em;
    }
    input, textarea {
        width: 100%;
        padding: 0.75em 1em;
        border: 0.25em;
        border: 1px solid #999;
    }

    .form-group {
        margin-bottom: 1.5em;
    }
    label {
        display: block;
        margin-bottom: 0.5em;
    }
    .error {
        border: 1px solid red;
    }
</style>