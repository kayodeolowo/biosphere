import React from 'react'
import { Container } from './Container'
import Image from 'next/image'
import { PrimaryButton } from './PrimaryButton'

const Header = () => {
  return (
    <section>
        <Container>
           <div className='flex justify-between items-center border-[#A3EB6B1A] bg-[#0B301E] px-4 rounded-xl py-2 mt-4'>
           <div>
                <Image alt='biosphere logo'
                src="/assets/images/logo.png"
                width={60}
                height={60}/>
            </div>


            <div className='flex space-x-3 text-white '>
                <p> Home </p>
                <p> Service </p>
                <p> Company </p>
                <p> Technology </p>
            </div>




            <div>
<PrimaryButton> Get Started </PrimaryButton>
            </div>
           </div>
        </Container>
    </section>
  )
}

export default Header