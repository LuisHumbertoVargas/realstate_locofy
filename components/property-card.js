const PropertyCard = ({ imgUrl, name, price }) => {
    return (
        <div className='rounded-3xs bg-gray-white box-border w-[350px] h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] text-left text-[14.51px] text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5'>
            <img
                className='self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover'
                alt=''
                src={imgUrl}
            />
            <div
                className='self-stretch flex flex-row p-2.5 items-start justify-start'
                // style={propertyNameStyle}
            >
                <div
                    className='flex-1 relative leading-[20.32px] font-medium'
                    // style={aLLIUMPLACEORLANDOStyle}
                >
                    {name}
                </div>
            </div>
            <div
                className='self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500'
                // style={priceStyle}
            >
                <div
                    className='relative leading-[18.98px] font-semibold'
                    // style={divStyle}
                >
                    $ {price}
                </div>
            </div>
            <div
                className='flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500'
                // style={moreDetailsStyle}
            >
                <div className='flex flex-row items-center justify-start gap-[4.35px]'>
                    <img
                        className='w-[17.42px] h-[17.42px]'
                        alt=''
                        src='/car.svg'
                    />
                    <div
                        className='relative leading-[16.27px] font-medium'
                        // style={div1Style}
                    >
                        4
                    </div>
                </div>
                <div className='flex flex-row items-center justify-start gap-[4.35px]'>
                    <img
                        className='w-[17.42px] h-[17.42px]'
                        alt=''
                        src='/bathtub.svg'
                    />
                    <div
                        className='relative leading-[16.27px] font-medium'
                        // style={div2Style}
                    >
                        4
                    </div>
                </div>
                <div className='flex flex-row items-center justify-start gap-[4.35px]'>
                    <img
                        className='w-[17.42px] h-[17.42px]'
                        alt=''
                        src='/arrowsOut.svg'
                    />
                    <div
                        className='relative leading-[16.27px] font-medium'
                        // style={ftStyle}
                    >
                        2,096.00 ft
                    </div>
                </div>
            </div>
            <div className='self-stretch flex flex-row items-center justify-between text-center text-[11.61px]'>
                <div className='flex flex-row items-center justify-start gap-[5.81px]'>
                    <img
                        className='rounded-[50%] w-[27.57px] h-[27.57px] object-cover'
                        alt=''
                        src='/ellipse-1@2x.png'
                    />
                    <div
                        className='relative leading-[17.42px] font-medium'
                        // style={jennyWilsonStyle}
                    >
                        Jenny Wilson
                    </div>
                </div>
                <div className='flex flex-row items-start justify-start gap-[8.71px]'>
                    <div className='rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start'>
                        <img
                            className='w-[14.51px] h-[14.51px]'
                            alt=''
                            src='/sharenetwork.svg'
                        />
                    </div>
                    <div className='rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start'>
                        <img
                            className='w-[14.51px] h-[14.51px]'
                            alt=''
                            src='/heart.svg'
                        />
                    </div>
                    <div className='rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start'>
                        <img
                            className='w-[14.51px] h-[14.51px]'
                            alt=''
                            src='/plus.svg'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
