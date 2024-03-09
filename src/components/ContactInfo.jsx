const headerStyle = {
    color:'#495057', 
}

const textStyle = {
    color:'#000000' 
}

const textBody= {
    textAlign: 'left',
    margin: '0 10%'
}


const ContactInfo = () => {
    return(
   <div class="text align-items-center" style={textBody}>
        <h5 style={headerStyle}>Email:</h5>
        <p style={textStyle}>wholepractice@wholepracticefeedingtherapy.com</p><br/>
        <h5 style={headerStyle}>Phone:</h5>
        <p style={textStyle}>+12162305832</p><br/>
   </div>
   )
}

export default ContactInfo;