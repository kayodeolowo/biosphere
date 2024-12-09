import React from 'react'
import { Container } from '../components/Container'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='bg-[#F3F5F4] '>
<Container >
    <div className=' '>

        <div className='pt-20 flex items-center justify-between'>
        <h1 className='text-bold text-4xl max-w-[60rem]  w-[90%]'> Explore our comprehensive suite of ecosystem services, designed to meet the unique needs of your project or organization. </h1>
       <div className='flex items-center'>
       <p className='font-bold'>Read more  </p>
        <Image
              alt="biosphere logo"
              src="/assets/icons/arrowright.png"
              width={20}
              height={10}
              className=" "
            />
       </div>
        </div>


        <div className='flex mt-10 mb-10 space-x-10'>
  <div className="relative w-[660px] h-[300px]">
    <Image
      alt="Ecological Assessments"
      src="/assets/images/farmer.png"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg p-4 flex items-center">
      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
      <p className="ml-2 text-white font-semibold text-lg">Ecological Assessments</p>
    </div>
  </div>

  <div className="relative w-[500px] h-[300px]">
    <Image
      alt="Habitat Restoration"
      src="/assets/images/trees.png"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg p-4 flex items-center">
      <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
      <p className="ml-2 text-lg text-white font-semibold">Habitat Restoration</p>
    </div>
  </div>
</div>

<div className='flex mb-20 space-x-10'>
  <div className="relative w-[480px] h-[300px]">
    <Image
      alt="Environmental Education"
      src="/assets/images/children.png"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg p-4 flex items-center">
      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
      <p className="ml-2 text-lg text-white font-semibold">Environmental Education</p>
    </div>
  </div>

  <div className="relative w-[680px] h-[300px]">
    <Image
      alt="Sustainable Land Management"
      src="/assets/images/boy.png"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 rounded-b-lg p-4 flex items-center">
      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
      <p className="ml-2 text-lg text-white font-semibold">Sustainable Land Management</p>
    </div>
  </div>
</div>

    
    </div>


    <div>
        <p className='text-5xl font-bold'>  When it comes to ecosystem management, experience and expertise make all the difference. Here's why <span className='bg-[#E0E40B]  '> Biophere Solutions </span> is the trusted partner for your nature-based initiatives. </p>
   
   <div className='flex mt-14  space-x-2 pb-12'>
    <div className='w-[49%]'>
    <Image
              alt="biosphere logo"
              src="/assets/images/workers.png"
              width={450}
              height={500}
              className=" "
            />
    </div>


    <div className='w-[45%]'>
    <div className="space-y-8">
  <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
    <div className="bg-[#A3EB6B] text-green-800 p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 9v6m0 0l-3-3m3 3l3-3m-6-6h10a6 6 0 110 12h-3"
        />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-green-900">
        Unparalleled Expertise
      </h3>
      <p className="text-gray-700 mt-2">
        Our team of ecologists, biologists, and environmental specialists bring
        decades of collective experience in ecosystem restoration and
        sustainable land management.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4 border-b border-gray-300 pb-4">
    <div className="bg-[#A3EB6B] text-green-800 p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 9v6m0 0l-3-3m3 3l3-3m-6-6h10a6 6 0 110 12h-3"
        />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-green-900">
        Innovative Approach
      </h3>
      <p className="text-gray-700 mt-2">
        We continually explore new technologies, research, and best practices to
        deliver cutting-edge solutions that drive measurable, long-lasting
        results.
      </p>
    </div>
  </div>

  <div className="flex items-start space-x-4">
    <div className="bg-[#A3EB6B] text-green-800 p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 9v6m0 0l-3-3m3 3l3-3m-6-6h10a6 6 0 110 12h-3"
        />
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-green-900">
        Commitment to Sustainability
      </h3>
      <p className="text-gray-700 mt-2">
        Sustainability is at the core of everything we do. We are dedicated to
        promoting the health and resilience of natural ecosystems for
        generations to come.
      </p>
    </div>
  </div>
</div>

</div>

   </div>
   
    </div>
</Container>
    </section>
  )
}

export default Services