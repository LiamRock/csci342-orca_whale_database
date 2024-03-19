import { Link } from 'react-router-dom'
function Card() {
  
    return (
        <div className="flex flex-col h-[800px] p-0 bg-[url(./src/assets/coast-background.jpg)] bg-cover bg-bottom bg-no-repeat]">
            <div className='flex justify-normal items-center h-[800px] p-2'>
                <div className='p-[5rem]'>
                    <h1 className='drop-shadow-[0_0_4px_white] mb-5 ml-[100px] text-black' >See what people have posted!</h1>
                    <p className='drop-shadow-[0_0_6px_black] ml-[100px] pr-[100px]'>
                    Explore the wonders of the ocean with us! Share your extraordinary whale sightings 
                    and dive into a world of marine marvels. Click below to share your experiences and 
                    discover breathtaking encounters with our community!
                    </p>
                    <Link to="/posts" className="relative top-[30px] left-[10%] text-[16px]">
                        <button className="text-black bg-white border-0 rounded-[25px] cursor-pointer">See Posts</button>
                    </Link>
                </div>
                <img className='w-[500px] h-[500px] mr-[300px] rounded-md drop-shadow-2xl' src="./src/assets/card.jpg"/>
            </div>
        </div>
    )
  }
  
  export default Card