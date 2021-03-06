import Header from "../common/Header";
import Footer from "../common/Footer";
import Modal from '../common/Modal/Modal'
import qrcode from '../images/qrcode.jpeg'

function Pricing() {

    const title1 ="payment subscription for 1month premium spypob"
    const id1 = "premium1"
    const Premium1= ()=>(
        <>
        <div className="container">
             <h1 className="text-center"><small>&#163; 300</small></h1>
            <img src={qrcode} className="img-fluid mb-3"/>
            <h6 className="text-center"><i className="fa fa-btc text-warning mr-1"></i>1GK2rs5qKEBp8mRvfjY4qetS1x6baPRoHa</h6>
        </div>
            <p className="text-center mt-3">After payment, contact us on <a href="tel:+19733064297">+19733064297</a> Or <a href="mailto:hubspy20@gmail.com">hubspy20@gmail.com</a> include proof of payment</p>
        </>
    )

    const title2 ="payment subscription for 3month premium spypob"
    const id2 = "premium2"
    const Premium2= ()=>(
        <div className="container">
             <h1 className="text-center"><small>&#163; 5,00</small></h1>
            <img src={qrcode} className="img-fluid mb-3"/>
            <h6 className="text-center"><i className="fa fa-btc text-warning"></i>1GK2rs5qKEBp8mRvfjY4qetS1x6baPRoHa</h6>
            <p className="text-center mt-3">After payment, contact us on <a href="tel:+19733064297">+19733064297</a> Or <a href="mailto:hubspy20@gmail.com">hubspy20@gmail.com</a> include proof of payment</p>
        </div>
    )

    const title3 ="payment subscription for 6month premium spypob"
    const id3 = "premium3"
    const Premium3= ()=>(
        <div className="container">
             <h1 className="text-center"><small>&#163; 7,00</small></h1>
            <img src={qrcode} className="img-fluid mb-3"/>
            <h6 className="text-center"><i className="fa fa-btc text-warning"></i>1GK2rs5qKEBp8mRvfjY4qetS1x6baPRoHa</h6>
            <p className="text-center mt-3">After payment, contact us on <a href="tel:+19733064297">+19733064297</a> Or <a href="mailto:hubspy20@gmail.com">hubspy20@gmail.com</a> include proof of payment</p>
        </div>
    )

    const title4 ="payment subscription for 12month premium spypob"
    const id4 = "premium4"
    const Premium4= ()=>(
        <div className="container">
             <h1 className="text-center"><small>&#163; 1,000</small></h1>
            <img src={qrcode} className="img-fluid mb-3"/>
            <h6 className="text-center"><i className="fa fa-btc text-warning"></i>1GK2rs5qKEBp8mRvfjY4qetS1x6baPRoHa</h6>
            <p className="text-center mt-3">After payment, contact us on <a href="tel:+19733064297">+19733064297</a> Or <a href="mailto:hubspy20@gmail.com">hubspy20@gmail.com</a> include proof of payment</p>
        </div>
    )


  return (
    <section>
      <Header />

      <div className="compat2" style={{height:"50vh"}}>
        <div className="container">
          <div className="col-md-7 mx-auto" style={{ paddingTop: "130px" }}>
            <h2 className="text-center text-white">
              <strong>PRICES</strong>
            </h2>
            <h6 className="text-center text-light mt-3 mb-5">
              {" "}
              Prices And Features
            </h6>
           
           
          </div>
        </div>
      </div>

      <Modal title={title1} id={id1} Data={Premium1} />
      <Modal title={title2} id={id2} Data={Premium2} />
      <Modal title={title3} id={id3} Data={Premium3} />
      <Modal title={title4} id={id4} Data={Premium4} />

      <div className="container" style={{ marginTop: "110px",marginBottom:"110px" }}>
        <h4 className="text-center m-5 text-muted">Choose Your Plan.</h4>

        <div className="row">
        <div className="col-md-3 mx-auto pt-md-4 px-4 pb-4 shadow mb-3">
            <div
              className="shadow"
              style={{
                height: "300px",
                borderRadius: "15px",
                backgroundColor: "#fafafa",
              }}
            >
              <div className="d-flex justify-content-center align-items-center p-3 mb-3 primary">
                <i className="fa fa-leaf fa-3x"></i>
              </div>
              <div className="container">
                  <div className="mx-auto text-center">
                      <h6 className="textprimary"><b>1 Months</b></h6>
                      <h6 style={{fontSize:"larger"}}>Premium</h6>
                        <h1><small>&#163; 300</small></h1>
                      <button className="btn btn-primary px-5 py-2 my-3"  data-toggle="modal" data-target={`#${id1}`}>Buy Now</button>
                  </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-auto pt-md-4 px-4 pb-4 shadow mb-3">
            <div
              className="shadow"
              style={{
                height: "300px",
                borderRadius: "15px",
                backgroundColor: "#fafafa",
              }}
            >
              <div className="d-flex justify-content-center align-items-center p-3 mb-3 primary">
                <i className="fa fa-leaf fa-3x"></i>
              </div>
              <div className="container">
                  <div className="mx-auto text-center">
                      <h6 className="textprimary"><b>3 Months</b></h6>
                      <h6 style={{fontSize:"larger"}}>Premium</h6>
                        <h1><small>&#163; 5,00</small></h1>
                        <button className="btn btn-primary px-5 py-2 my-3"  data-toggle="modal" data-target={`#${id2}`}>Buy Now</button>
                  </div>
              </div>
            </div>
          </div>
          

          <div className="col-md-3 mx-auto pt-md-4 px-4 pb-4 shadow mb-3">
            <div
              className="shadow"
              style={{
                height: "300px",
                borderRadius: "15px",
                backgroundColor: "#fafafa",
              }}
            >
              <div className="d-flex justify-content-center align-items-center p-3 mb-3 primary">
                <i className="fa fa-leaf fa-3x"></i>
              </div>
              <div className="container">
                  <div className="mx-auto text-center">
                      <h6 className="textprimary"><b>7 Months</b></h6>
                      <h6 style={{fontSize:"larger"}}>Premium</h6>
                        <h1><small>&#163; 7,00</small></h1>
                        <button className="btn btn-primary px-5 py-2 my-3"  data-toggle="modal" data-target={`#${id3}`}>Buy Now</button>
                  </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 mx-auto pt-md-4 px-4 pb-4 shadow mb-3">
            <div
              className="shadow"
              style={{
                height: "300px",
                borderRadius: "15px",
                backgroundColor: "#fafafa",
              }}
            >
              <div className="d-flex justify-content-center align-items-center p-3 mb-3 primary">
                <i className="fa fa-leaf fa-3x"></i>
              </div>
              <div className="container">
                  <div className="mx-auto text-center">
                      <h6 className="textprimary"><b>12 Months</b></h6>
                      <h6 style={{fontSize:"larger"}}>Premium</h6>
                        <h1><small>&#163; 1,000</small></h1>
                        <button className="btn btn-primary px-5 py-2 my-3"  data-toggle="modal" data-target={`#${id4}`}>Buy Now</button>
                  </div>
              </div>
            </div>
          </div>

<div className="table-responsive">
    <table className="table table-striped table-bordered">
        <thead>
            <th></th>
            <th><h6 style={{fontSize:"larger"}}>Premium</h6></th>
            <th><h6 style={{fontSize:"larger"}}>Premium</h6></th>
            <th><h6 style={{fontSize:"larger"}}>Premium</h6></th>
            <th><h6 style={{fontSize:"larger"}}>Premium</h6></th>
        </thead>
       <tbody>
           <tr>
               <td>
                   <h6>calls</h6>
               </td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-phone textprimary fa-2x mr-2"></i>Monitor calls
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>

           <tr>
               <td>
                   <h6>TEXT MESSAGES</h6>
               </td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-envelope-open textprimary fa-2x mr-2"></i>SMS & MMS
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <h6>MESSAGING APPS</h6>
               </td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-comment textprimary fa-2x mr-2"></i>Hangout
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-apple textprimary fa-2x mr-2"></i>iMessages
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-instagram textprimary fa-2x mr-2"></i>Instagram Messages
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-cube textprimary fa-2x mr-2"></i>facebook Messenger
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-star-half textprimary fa-2x mr-2"></i>kik
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-link textprimary fa-2x mr-2"></i>line
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-skype textprimary fa-2x mr-2"></i>skype
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-snapchat textprimary fa-2x mr-2"></i>snapchat
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-paper-plane textprimary fa-2x mr-2"></i>telegram
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-fire textprimary fa-2x mr-2"></i>tinder
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-whatsapp textprimary fa-2x mr-2"></i>whatsapp
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <h6>MULTIMEDIA FILES</h6>
               </td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-photo textprimary fa-2x mr-2"></i>photo
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
           <tr>
               <td>
                   <i className="fa fa-youtube textprimary fa-2x mr-2"></i>video
               </td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
               <td><i className="fa fa-check-circle text-success mr-1"></i></td>
           </tr>
       </tbody>

    </table>
</div>


        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Pricing;
