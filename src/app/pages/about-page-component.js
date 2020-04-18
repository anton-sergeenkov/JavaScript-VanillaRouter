import { WFMComponent } from "../../framework";

class AboutPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const aboutPageComponent = new AboutPageComponent({
    selector: 'app-about-page',
    template: `
        <div style="padding: 20px;">
        <div style="display: flex; align-items: center;" >
            <a href="#menu"><-- BackLink</a>
            <h1 style="margin-left: 30px">About</h1>
        </div>
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>`
})