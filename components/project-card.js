const template = document.createElement("template");
template.innerHTML = `
    <style>
        .project-content {
            display: flex;
            flex-direction: column;
            max-width: 20rem;
            height: 21.25rem;
            padding: 0.75em;
            background-color: var(--dark-three);
            border-radius: 0.25rem;
            box-shadow: 0 10px 30px -15px var(--dark-one);
            position: relative;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            box-sizing: border-box;
        }

        .project-content:hover {
            transform: translateY(-0.125rem);
        }

        .project-content img {
            outline: 1px solid #000000;
            border-radius: 0.25rem;
        }

        .content-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: var(--main-font);
            height: 100%;
            margin-top: 0.5em;
        }

        a {
            color: #ffffff;
        }

        a::before {
            content: "";
            display: block;
            position: absolute;
            z-index: 0;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0;
        }

        .icon-container {
            display: flex;
            column-gap: 4px;
        }

        .icon-container img {
            border-radius: 0;
            width: 1.25rem;
            height: 1.25rem;
            outline-color: #000000;
            background-color: #333333;
        }
    </style>

    <div class="project-content">
        <slot name="media">media<slot>
        <div class="content-container">
            <div>
                <a
                    id="transitionLink"
                    href="./pages/edge.html"
                    target="_self"
                    >
                    <slot>Default</slot>
                </a>
                <p class="text">
                    Building components for different browser features and
                    experiences.
                </p>
            </div>
            <span class="icon-container">
                <img src="./assets/img/icon/icon-ts.png" alt="typescript" />
                <img
                src="./assets/img/icon/icon-wc.png"
                alt="web component"
                />
                <img src="./assets/img/icon/icon-fast.png" alt="fast" />
            </span>
        </div>
    </div>
`;

class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("project-card", ProjectCard);
