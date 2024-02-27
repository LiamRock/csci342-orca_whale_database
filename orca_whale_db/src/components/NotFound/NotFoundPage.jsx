import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='text-center m-8'>
            <h1 className='m-8'>Page Not Found</h1>
            <p className='text-black m-8'>
                We cannot find the page you&apos;re looking for!
            </p>
            <Link to="/" className='m-8'>Home</Link>
        </div>
    )
}

export default NotFoundPage