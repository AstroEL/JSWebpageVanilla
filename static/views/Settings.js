import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHTML() {
        return `
        <h1> Welcome to the Settings </h1>
        <p>
        I come from a land down under, way below the surface. They call it, The Amenti..
        </p>
        <p>
            <a href="/dashboard" data-link>Go Home</a>.
        </p>
        `;
    }
}