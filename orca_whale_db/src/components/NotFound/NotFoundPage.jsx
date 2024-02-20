import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>
                We cannot find the page you&apos;re looking for!
            </p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage