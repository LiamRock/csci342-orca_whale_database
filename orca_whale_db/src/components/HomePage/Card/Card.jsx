import { Link } from 'react-router-dom'
function Card() {
  
    return (
        <div className="v-screen h-[800px] p-0">
            <img className='w-screen h-full ' src="./src/assets/coast-background.jpg" />
            <div className='relative top-[-50%] left-2/4 flex flex-row translate-x-[-50%] translate-y-[-50%] justify-normal items-center w-full h-full p-5'>
                <div className='text-white'>
                    <h1 className='mb-5 ml-[100px]' >See what people have posted!</h1>
                    <p className='drop-shadow-sm mr-[100px] ml-[100px]'>
                    Explore the wonders of the ocean with us! Share your extraordinary whale sightings 
                    and dive into a world of marine marvels. Click below to share your experiences and 
                    discover breathtaking encounters with our community!
                    </p>
                    <button className="relative top-[30px] left-[10%] text-[16px] bg-white text-black border-0 rounded-[25px] cursor-pointer ">
                        <Link to="/posts" className="text-black">See Posts</Link>
                    </button>
                </div>
                <img className='w-[500px] h-[500px] mr-[50px]' src="./src/assets/card.jpg"/>
            </div>
        </div>
    )
  }
  
  export default Card