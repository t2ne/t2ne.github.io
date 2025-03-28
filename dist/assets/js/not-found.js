import { LitElement, html, css } from "https://cdn.skypack.dev/lit";

export class NotFoundPage extends LitElement {
  render() {
    return html`
      <header>
        <nav>
          <a href="https://t2ne.eu">home</a>
        </nav>
      </header>
      <div class="content">/page-not-found</div>
      <footer>
        <a class="app-icon" href="http://github.com/t2ne" target="_blank">
          <img src="assets/imgs/footer/github.avif" alt="GitHub" />
        </a>
        <a class="app-icon" href="http://linkedin.com/in/t2ne/" target="_blank">
          <img src="assets/imgs/footer/linkedin.avif" alt="LinkedIn" />
        </a>
        <a
          class="app-icon"
          href="https://linktr.ee/t2ne/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/imgs/footer/linktree.avif"
            alt="LinkTree"
            width="20"
            height="20"
          />
        </a>
      </footer>
    `;
  }

  static styles = css`
    /* Reset default margins and padding */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Prevent scrolling on body */
    :root,
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100vh; /* Changed from min-height to height */
      width: 100vw; /* Added explicit width */
      margin: 0;
      padding: 0;
      overflow: hidden; /* Prevent scrolling */
      background-color: black;
      color: white;
      font-family: "Arial Black", Arial, sans-serif;
      position: fixed; /* Ensure it stays fixed */
      top: 0;
      left: 0;
    }

    header {
      width: 100%;
      background-color: black;
      padding: 1em;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 1em;
      flex-wrap: wrap;
    }

    nav a {
      color: white;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s;
      padding: 0.5em;
    }

    nav a:hover {
      color: #cccccc;
      transform: scale(1.1);
    }

    .content {
      font-size: clamp(1.5rem, 4vw, 3rem);
      font-weight: bold;
      text-align: center;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em;
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      padding: 1em;
      width: 100%;
      flex-wrap: wrap;
      gap: 20px; /* Added gap for better spacing */
    }

    .app-icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .app-icon:hover {
      transform: scale(1.1); /* Added hover effect */
    }

    .app-icon img {
      filter: invert(1);
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;
}

customElements.define("not-found-page", NotFoundPage);
