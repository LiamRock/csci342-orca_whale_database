import { Link } from 'react-router-dom';

function Footer() {
    return(
    <footer className="bottom-0 left-0 right-0 h-[220px] bg-[#F6F9FF] text-black w-screen text-center pt-5 ">
        <div className='flex flex-row ml-5 mr-5 pb-5 border-b-[1px] border-black border-solid items-center justify-center'>
            <img className='flex w-[50px] h-auto mr-[30px]' src='./src/assets/orcaLogo.png'/>
            <p className='mt-2.5'>
            Discover awe-inspiring sightings, fascinating facts, and captivating stories about these 
            majestic marine creatures. Join our community of enthusiasts and conservationists as we 
            celebrate the beauty and wonder of whales together. 
            </p>
            <img className='flex w-[50px] h-auto mr-[30px]' src=''/>
        </div>
        <div className='mt-5 text-center mb-2'>
            <Link className='text-black m-5' to="/">Home</Link>
            <Link className='text-black m-5' to="/aboutus">About Us</Link>
        </div>
        <a className='text-black text-[12px]' href="https://deciduous-submarine-062.notion.site/Orca-Whale-Database-App-d8d8373acfd84ad8a2810f2c8e2a352f?pvs=74">
            App Development<br/>(link to external website)
        </a>
    </footer>
    )
}
export default Footer;