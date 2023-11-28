import { fail } from '@sveltejs/kit'

export const actions = {
    default: async({request}) => {
        const formData = await request.formData()
        const name = formData.get("name")
        const mail = formData.get("mail")
        const message = formData.get("message")

        //note: add data management here

        if (!name) {
            return fail(400, {error: "name is missing", mail, message})
        }

        if (!mail) {
            return fail(400, {error: "mail is missing", name, message})
        }

        if (!message) {
            return fail(400, {error: "no message", name, mail})
        }
        
        return {
            success: true,
            status: "Form is submitted",
        }
    }
}