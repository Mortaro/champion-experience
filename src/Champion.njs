import Nullstack from 'nullstack';

class Champion extends Nullstack {

  level = 1;

  levelUp({data}) {
    this.level += data.experience;
  }

  renderExperienceButton({experience}) {
    return (
      <button onclick={this.levelUp} data-experience={experience}> 
        +{experience}
      </button>
    )
  }

  render({name}) {
    return (
      <div>
        <img src={`https://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/${name}.png`} />
        <h2> {name} </h2>
        <span> level {this.level} </span>
        <div>
          <ExperienceButton experience={1} />
          <ExperienceButton experience={2} />
          <ExperienceButton experience={3} />
        </div>
        {this.level >= 6 &&
          <p> Ultimate is Available! </p>
        }
      </div>
    )
  }
  
}

export default Champion;