import Link from 'next/link';

export default function Navbar(){
    return (
        <nav>
            <div className='bg-white text-gray-700 p-4 container mx-auto p-8 mt-3 h-5 flex justify-center items-center rounded-xl shadow-md'>
                <ul className='flex space-x-15 justify-center text-lg font-semibold items-center'>
                    <li>
                        <Link href={'/products'} className='hover:text-gray-300 transition duration-500'>Products</Link>
                    </li>
                    <li>
                        <Link href={'/cart'} className='hover:text-gray-300 transition duration-500'>Cart</Link>
                    </li>
                    <li>
                        <Link href={'/checkout'} className='hover:text-gray-300 transition duration-500'>Checkout</Link>
                    </li>
                </ul>
            </div>

        </nav>
        
    )
}