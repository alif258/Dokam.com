import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

const Banner = () => {
  return (
    <Container >
      <Flex className="flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 py-20 px-4 sm:px-6 lg:px-0">

        {/* Text Section */}
        <div className="text w-full lg:w-[624px] lg:pr-[118px]">
          <p className='text-[18px] font-semibold leading-[130%] text-[#2947BF] poppins'>
            Senior Editor
          </p>

          <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-[120%] text-[#0C2D57] poppins my-5'>
            Abu Darda Ishaq
          </h2>

          <p className='text-[16px] sm:text-[18px] leading-[140%] text-[#575757] lato'>
            Abu Darda Ishaq is weDevs’s Senior Editor. Previously, he was the Managing Editor of content marketing for Barnes & Noble, where he also founded The Barnes & Noble Sci-Fi & Fantasy Blog and published a novelette by the Malaysian fantasy author Zen Cho that won a Hugo Award in 2019. At the start of his career, Joel won awards of his own from the Illinois Press Association for his work as a local journalist. He currently lives in Brooklyn, NY.
          </p>
        </div>

        {/* Image Section */}
        <div className="photo w-full lg:w-auto flex justify-center lg:justify-start pt-8 lg:pt-0">
          <Image className="max-w-full h-auto" src='/images/man.png' />
        </div>

      </Flex>
    </Container>
  )
}

export default Banner
