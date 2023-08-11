import React from 'react'

const Footer = () => {
    const t=new Date();
  return (
    <>
    <div className="footer">
      <div className="about">
        <h5>About</h5>
        <a href="#">About</a><br />
        <a href="#">Awards & Recognitions</a><br />
        <a href="">Our Team</a><br />
        <a href="">News</a><br />
        <a href="">Career</a><br />
      </div>

      <div className="services">
        <h5>Services</h5>
        <a href="#">Cloud Services</a><br />
        <a href="#">Azure services</a><br />
        <a href="">Partner Solutions</a><br />
        <a href="">Beap-Tech</a><br />
      </div>

      <div className="Products">
        <h5>Products</h5>
        <a href="#">Machine Learning</a><br />
        <a href="#">Cloud Learning</a><br />
        <a href="">Green Matters</a><br />
        <a href="">Wasuli</a><br />
        <a href="">Tadam</a><br />
      </div>

      <div className="getin">
        <h5>Get in touch</h5>
        <p>G7CR Technologies MEA LLC
         Po Box:118824, Office 850, 8th Floor,
          Tamani Arts Offices - Al Asayel St
       - Business Bay - Dubai - United Arab Emirates</p>
        <p>Email : info@g7cr.ae / contact.us@g7cr.ae</p>
        <p>Phone : +971-45489906</p>
      </div>
    
   
    </div>
     <p>Copyright &copy; {t.getFullYear()} </p>
     </>

)
}

export default Footer