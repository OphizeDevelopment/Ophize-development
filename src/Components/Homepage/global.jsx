import map from '../../assets/global.png'

const global = () => {
  return (
    <>
      <div className="w-full">
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className="flex flex-col justify-center items-center gap-5 px-4 text-center">
            <h1 className="uppercase sm:text-3xl text-xl font-bold text-[#305197] tracking-wider">
              global services
            </h1>
            <p className="text-[#305197] md:text-base text-xs lg:w-[50rem]">
              Businesses generally promote their brand, products, and services
              by identifying audience. No wonder that promotion strategy is one
              of the most important processes in marketing.
            </p>
          </div>
          <img src={map} alt="Global Services Map" className='w-[70rem]' />
        </div>
      </div>
    </>
  );
};

export default global;
