export const actions = {
    default: async({request}) => {
        const formData = await request.formData()
        const name = formData.get("name")
        const mail = formData.get("mail")
        const message = formData.get("message")

        // reminder: Add check system and functions
        
        return {
            message: "Form is submitted"
        }
    }
}