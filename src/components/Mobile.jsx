
import './Mobile.css'
function Mobile(props) {
   return(
    <>
    <div id="main">
        <div id="child1">
         <img src={props.image} alt="" />
        </div>
        <div id="child2">
              <h2>{props.name}</h2>

              <ul>
                <li>{props.f1}</li>
                <li>{props.f2}</li>
                <li>{props.f3}</li>
                <li>{props.f4}</li>
                <li>{props.f5}</li>
              </ul>
        </div>
        <div id="child3">
       <h1>{props.price}</h1>
       <strike>{props.old}</strike>
        </div>
    </div>
    </>
   )
}
export default Mobile