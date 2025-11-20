
import { Link } from 'react-router-dom';

function Header() {
    return <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl text-white font-bold tracking-tight">HOSTEL HUB</h1>
            <div className="space-x-4">
                <Link to='/sign-in' className='flex items-center bg-white text-blue-400 px-3 font-bold hover:bg-gray-600'>Sign-in</Link>
            </div>
        </div>
    </header>;
}

export default Header;