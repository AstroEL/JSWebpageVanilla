import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHTML() {
        return `
        <h1> Welcome home amigo </h1>
        <p>
        I come from a land down under, way below the surface. They call it, The Amenti..
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>.
        </p>
        `;
    }
}