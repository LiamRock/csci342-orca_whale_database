function Banner({title, backgroundImage}) {
    return (
        <div className="h-[45rem] w-screen flex flex-col items-center">
            <div className="absolute z-0 h-[45rem] w-screen bg-[url('./src/assets/banner.jpg)] bg-cover bg-center opacity-[90%]" style={{backgroundImage : `url(${backgroundImage})`}}/>
            <div className='mt-[20rem] text-center z-[1]'>
                <div className=''>
                    <h1 className='text-[#ffffff] text-[32px] mb-5 drop-shadow-[0_0_8px_black] max-w-[50rem] leading-normal '>{title}</h1>
                </div>
            </div>
        </div>
    )
}
  
  export default Banner