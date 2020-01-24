/* Hero */

class Hero extends React.Component {
  render () {
    const { name, description } = this.props.project;
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="mono font-s magnify lighter text-center white-cl">{name}</h1>
          </div>
          <div className="hero-row">
            <p className="mono font-xs lighter text-center gray-500-cl">{description}</p>
          </div>
          <div className="hero-row">
            <img src={require("../assets/images/globe.gif")} alt="SomewhereSomeplace.earth" className="globe center-h" title="SomewhereSomeplace.earth - A Journey... no destination."/>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
