<script>
    import Button from "$lib/button.svelte"

    export let form

    $: console.log(form)
</script>

<div class="container">
    <h2>Contact us</h2>
    <p>{form?.message || ""}</p>
    <form method="POST">
        <div class="form-group">
            <label for="name" class="col-md-3 control-label">Name</label>
            <div class="col-md-9">
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                class="form-control"/>
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
                class="form-control"/>
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
                rows="5"/>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-md-12">
                <Button type="submit">Submit</Button>
            </div>
        </div>
    </form>
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
</style>