import React from 'react'

function Testimonial() {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Ruchita"} feedback={"I am thrilled with the simple yet impactful work that Dilip delivered. "} />
            <TestimonialCard name={"Vishal"} feedback={"I highly recommend Dilip for their ability to consistently deliver high-quality work"} />
            <TestimonialCard name={"Abhishek"} feedback={"Dilip is a true professional who consistently delivers exceptional work with elegant touch."} />
        </section>
    </div>
  )
}

const TestimonialCard = ({name,feedback}) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial