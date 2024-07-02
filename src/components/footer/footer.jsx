import './footer.css'

const footer = () => {
  return (
    <div className="container-fluid footerr">
     <div className="container foo p-3">
        <div className="section-1 col-md-6 py-2">
            <div className="row">
                <div className="col-md-3">
                    <img src="./src/assets/img/logo_4.png" width={150} alt="" className='my-3' />
                    <small className='mx-2 my-4' style={{color:'#fff'}}>© R Singhania</small>
                </div>
                <div className="col-md-3 text-light">
                    <ul>
                        <b>Company</b>
                        <li>About</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="col-md-3 text-light">
                    <ul>
                        <b>Terms</b>
                        <li>Data Privacy</li>
                        <li>Terms</li>
                        <li>Accessiblity</li>
                    </ul>
                </div>
                <div className="col-md-3 text-light">
                    <ul>
                        <b>Related</b>
                        <li>Find Buyer</li>
                        <li>Feedback</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="section-2 col-md-6 d-flex justify-content-end align-items-center ">
            <ul className='d-flex' style={{alignItems:'end'}}>
                <li className='mx-2'><img src="./src/assets/img/link-1.png" alt="" /></li>
                <li className='mx-2'><img src="./src/assets/img/link-2.png" alt="" /></li>
                <li className='mx-2'><img src="./src/assets/img/link-3.png" alt="" /></li>
                <li className='mx-2'><img src="./src/assets/img/link-4.png" alt="" /></li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default footer
