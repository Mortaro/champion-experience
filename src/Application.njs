import Nullstack from 'nullstack';
import Champion from './Champion';

import './Application.scss';

class Application extends Nullstack {

  static async start({project}) {
    project.name = 'Nullstack Champion Experience';
    project.domain = 'nullstack.app';
    project.color = '#09101f';
  }

  prepare({project, page}) {
    page.title = project.name;
    page.locale = 'en-US';
  }

  render() {
    return (
      <main>
        <Champion name="Jinx" />

        <Champion name="Akali" />

        <Champion name="Ekko" />
      </main>
    )
  }

}

export default Application;