
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const header = () => {
  return (
    <div>
      <div className="header">
        <div className="headform">

        <div className="headd">
            <h1><strong>Are you a Suppliers?</strong></h1>
            <h1>Explore matching Oportunities.</h1>
        </div>
        <div className="formm d-flex ">
            <form action="#" className='d-flex '>
                <div className="form-group ">
                <FontAwesomeIcon icon={faBriefcase} style={{color:'#E7770D'}} />
                    <input type="text" className='' placeholder='Search your required service here' />
                </div>
                <div className="form-group">
                <FontAwesomeIcon icon={faLocationDot} style={{color:'#E7770D'}}  />
                    <input type="text" className='' placeholder='Search your desired location here '/>
                </div>
                
                <button className='px-4' style={{background:'#00732F',outline:'none', border:'none', color:'#fff',borderRadius:'5px'}}> Search</button>
                
            </form>
        </div>
            <p style={{color:'#fff'}}><b>Are you a Buyer?</b> <a href="#" style={{color:'#fff' , textDecoration:'underline'}}>click here if you are looking to post a requirement</a></p>
        </div>
        </div>
    </div>
  )
}

export default header
