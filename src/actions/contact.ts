import { defineAction } from "astro:actions";

export const contact = {
    sendEmail: defineAction({
        handler: (input) => {
            console.log(input);
            
        }
    })
}