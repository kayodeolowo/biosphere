import React from 'react'
import { Container } from '../components/Container'
import Image from 'next/image'
import { SecondaryButton } from '../components/SecondaryButton'

const Started = () => {
  return (
<section>
    <Container>
        <div>
            <h1 className='text-center text-3xl md:text-6xl font-bold text-white mt-20'> Get Started Today </h1>
       <p className='text-[#F5F2F2] text-center mt-8'> Ready to transform your relationship with the natural world? Contact us today to learn how our ecosystem <br/> services can help you achieve your environmental goals. </p>
       
       <div className='w-fit mx-auto mt-6'>
        <SecondaryButton> Schedule a Consultation </SecondaryButton>
       </div>
       <Image
              alt="biosphere logo"
              src="/assets/images/family.png"
              width={700}
              height={420}
              className=" w-fit  mx-auto mt-6"
            />
        </div>

        <h1 className='md:text-center text-3xl  md:text-6xl font-bold text-white mt-20'> Biosphere Solutions </h1>
    </Container>
</section>
  )
}

export default Started