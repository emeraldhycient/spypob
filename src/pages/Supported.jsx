function Supported() {
  return (
    <section style={{ backgroundColor: "#f3f0f0" }}>
      <div className="container pt-5">
        <h1
          className="text-center text-dark"
          style={{ marginTop: "80px", wordSpacing: "-3px" }}
        >
          Dozens of Features. One App.
        </h1>
        <div className="col-md-8 m-auto text-center">
          <h6 className=" text-dark mt-4">
            spyPob is more than an app. It’s the key to the Internet. And it’s
            yours to help you unlock their digital world, find out the truth,
            and rest a little easier.
          </h6>
        </div>
      </div>
      <div
        className="container-fluid d-flex justify-content-around"
        style={{ marginTop: "100px", overflowX: "scroll" }}
      >
        <i className="fa fa-tty fa-3x"></i>
        <i className="fa fa-camera text-info fa-3x"></i>
        <i className="fa fa-whatsapp text-success fa-3x"></i>
        <i className="fa fa-comment text-info fa-3x"></i>
        <i className="fa fa-phone text-warning fa-5x"></i>
        <i className="fa fa-envelope-open text-primary fa-5x"></i>
        <i className="fa fa-fire fa-3x text-danger"></i>
        <i className="fa fa-snapchat text-warning fa-3x"></i>
        <i className="fa fa-comments text-success fa-3x"></i>
        <i className="fa fa-image fa-3x text-info"></i>
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div
          className="col-md-7 mx-auto pt-4 px-4 pb-4 shadow"
          style={{
            height: "150px",
            borderRadius: "15px",
            backgroundColor: "#fafafa",
          }}
        >
          <h5 className="text-center">Call Monitoring</h5>
          <p className="text-muted">
            Wondering what they’re up to when their phone rings? mSpy can help
            with a detailed call log, including timestamps, duration, and more.
          </p>
        </div>
      </div>

      <div className="container pt-5 pb-5">
        <h1
          className="text-center text-dark"
          style={{ marginTop: "80px", wordSpacing: "-3px" }}
        >
          spyPob Works on Your Favorite Device
        </h1>
        <div className="col-md-8 m-auto text-center">
          <h6 className=" text-muted mt-4">
            Every family is different. That’s why we’ve made sure mSpy works on
            your device, no matter what operating system you and your family
            use. And with both jailbreak and local sync solutions, it’s easy to
            get up and running.
          </h6>
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
        <div
            className="col-md-5 mx-auto pt-md-4 px-4 pb-4 shadow mb-3"
            style={{
              height: "210px",
              borderRadius: "15px",
              backgroundColor: "#fafafa",
            }}
          >
           <div className="d-flex justify-content-between align-items-center mt-3">
               <div className="mr-3">
                   <i className="fa fa-android fa-5x textprimary"></i>
               </div>
               <div className="" style={{width:"90%"}}>
                   <h5>Android</h5>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Physical access to the device required</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Installation directly on the phone</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>App works in the background</p>
               </div>
           </div>
          </div>

          <div
            className="col-md-5 mx-auto pt-md-4 px-4 pb-4 shadow mb-3"
            style={{
              height: "210px",
              borderRadius: "15px",
              backgroundColor: "#fafafa",
            }}
          >
           <div className="d-flex justify-content-between align-items-center mt-3">
               <div className="mr-3">
                   <i className="fa fa-apple fa-5x textprimary"></i>
               </div>
               <div className="" style={{width:"90%"}}>
                   <h5>Android</h5>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>iCloud credentials required</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Physical access needed if 2FA is on</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Re-login required after 14-day active sync</p>
               </div>
           </div>
          </div>

          <div
            className="col-md-5 mx-auto pt-md-4 px-4 pb-4 shadow mb-3"
            style={{
              height: "210px",
              borderRadius: "15px",
              backgroundColor: "#fafafa",
            }}
          >
           <div className="d-flex justify-content-between align-items-center mt-3">
               <div className="mr-3">
                   <i className="fa fa-wrench fa-5x textprimary"></i>
               </div>
               <div className="" style={{width:"90%"}}>
                   <h5>Jailbreak Option</h5>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Jailbroken device needed</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Physical access to the device required</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Jailbreak will be visible to the user</p>
               </div>
           </div>
          </div>

          <div
            className="col-md-5 mx-auto pt-md-4 px-4 pb-4 shadow mb-3"
            style={{
              height: "210px",
              borderRadius: "15px",
              backgroundColor: "#fafafa",
            }}
          >
           <div className="d-flex justify-content-between align-items-center mt-3">
               <div className="mr-3">
                   <i className="fa fa-usb fa-5x textprimary"></i>
               </div>
               <div className="" style={{width:"90%"}}>
                   <h5>Local Sync Option</h5>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Physical access to the device required</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>Mac or Windows PC required</p>
                   <p className="text-muted"><i className="fa fa-check-circle text-success mr-2"></i>App works in the background</p>
               </div>
           </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Supported;
