import { View } from "./view.js";

export class MensagemView extends View<string> {

    //método que declara o template da view
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
