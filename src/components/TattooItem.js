import './TattooItem.css'

function TattooItem(props) {
  const {tattoo} = props;
    return(
        <div>
        <img className="picture" src={tattoo.url}/>
        <h4>{tattoo.title}</h4>
      </div>
    )
}

export default TattooItem;