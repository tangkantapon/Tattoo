import './TattooItem.css'
// ใส่ props เปน parameter เพิ่อรับค่าจาก  app.js
function TattooItem(props) {
  //สกัด ตัวแปร props 
  const {tattoo, onTattooClick} = props;
    return(
        <div className="tattoo-item">
          <img src={tattoo.url} onClick={() => {onTattooClick(tattoo)}}></img>
          <p>{tattoo.title}</p>
        </div>
    )
}

export default TattooItem