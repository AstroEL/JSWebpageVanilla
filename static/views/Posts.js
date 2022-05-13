import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHTML() {
        return `
        <h1> Welcome to the Posts and stuff </h1>
        <p>
        I come from a land down under, way below the surface. They call it, The Amenti..
        </p>
        `;
    }
}