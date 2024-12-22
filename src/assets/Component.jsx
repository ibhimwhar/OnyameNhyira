import './Component.css'
function Component(props) {

  const personInfo = [
    {address: "9685 Hagel Cir. Lorton, VA .22079"},
    {name: "Master Asana"},
    {mainPhoneNum: "571-583-2029"},
    {EPhoneNum: "571-577-5922"}
  ]

  return(
    <>
      <div className="topnav">
        <h1>{props.companyName}</h1>
        <h4>Tailoring and Dress Making Center</h4>
      </div>
      {personInfo.map( (item) => (
        <li>{item.name} {item.address} {item.mainPhoneNum} {item.EPhoneNum}</li>
      ))}
    </>
  )
}


export default Component;