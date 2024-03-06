const ContactForm = () => {
    return(
        <div className="container d-flex justify-content-start align-items-center pb-3">
            <p className="col-lg-5 text-center mx-auto bg-light">
            <h3><strong>Contact With Any Inquiries</strong></h3>
            <form style={{ marginBottom: '20%' }}>
            <div class="mb-3">
                <label for="Full Name" class="form-label">Full Name</label>
                <input type="password" class="form-control" id="fullNameInput"/>
            </div>  
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="messageInput" className="form-label">Message</label>
                <textarea className="form-control" id="messageInput" rows="5"></textarea>
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </p><br/> 
        </div>
    )
}

export default ContactForm;