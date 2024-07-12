import Head from 'next/head'
import Image from 'next/image'

export async function generateMetadata() {
  return {
    title: 'New Zealand Certificate in English Language - Abacus Institute Of Studies',
    descriptions: 'Abacus Institute of Studies is an NZQA approved Category 1 Institution which delivers business, IT & English language qualifications at Christchurch and Auckland Campuses. Our vision is to lead the education sector, demonstrating best practice in teaching, learning and assessment, creating productive, efficient and professional graduates.'
  }
}

export default function Abacus() {
  return (
    <div className="font-serif m-5">
      <div className="max-w-4xl my-0 mx-auto">
        <Head>
          <link rel="shortcut icon" href="/abacus/favicon.ico" />
        </Head>
        <div className="bg-red-450 flex flex-col items-center p-7">
          <div className="pr-20">
            <Image src="/abacus/abacus-logo.png" alt="abacus institute logo" width={218} height={58} />
          </div>
          <h2 className="text-white text-3xl font-normal m-2.5 text-center">
            <span className="block uppercase">Certificate</span>
            <span className="block uppercase">of attendance</span>
          </h2>
        </div>
        <div className="text-center">
          <p className="text-lg my-4">This is to certify that:</p>
          <h1 className="font-normal text-4xl mt-16 mx-0 mb-10">Diego Rocha Chagas</h1>
          <div className="bg-red-450 inline-block py-1 px-11 mb-32">
            <p className="text-xl m-0 p-0.5">has attended the NZCEL (Modules) Level 2 course from 04/06/2018 to 23/09/2018</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around">
          <figure className="relative w-48">
            <Image 
              className="w-44 relative -top-3 left-5 z-10"
              src="/abacus/teacher-sign.png" 
              alt="teacher signature"
              width={400}
              height={125} 
            />
            <figcaption className="absolute top-3">
              <hr/>
              <p>(Teacher)</p>
            </figcaption>
          </figure>
          <div className="mb-20">
            <Image className="w-24" src="/abacus/abacus-circle-burst.png" alt="" width={230} height={234} />
          </div>
          <figure className="relative w-48">
            <Image
              className="w-32 absolute -top-14 left-14" 
              src="/abacus/director-sign.png" 
              alt="director signature" 
              width={301}
              height={101}
            />
            <figcaption className="absolute -top-1">
              <hr className="my-3 mx-0" />
              <p className="font-sans text-sm italic">
                <span>Lawton Hakaraia (Director&nbsp;</span>
                <span className="capitalize">Teaching & learning)</span>
              </p>
            </figcaption>
          </figure>
        </div>
        <hr className="bg-black h-2.5 sm:mt-14" />
      </div>
    </div>
  )
}