import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <section>
            <div className="flex-none lg:hidden md:pl-5">
                <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </label>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='hover:text-orange-500 hover:bordered' to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <li><Link className='hover:text-orange-500 hover:bordered' to='myOrders'>My Orders</Link></li>
                        }
                        {
                            !admin && <li><Link className='hover:text-orange-500 hover:bordered' to='addReview'>Add A Review</Link></li>
                        }
                        {
                            admin && <li><Link className='hover:text-orange-500 hover:bordered' to='manageOrders'>Manage All Orders</Link></li>
                        }
                        {
                            admin && <li><Link className='hover:text-orange-500 hover:bordered' to='addProduct'>Add A Product</Link></li>
                        }
                        {
                            admin && <li><Link className='hover:text-orange-500 hover:bordered' to='addBlog'>Add Blog</Link></li>
                        }
                        {
                            admin && <li><Link className='hover:text-orange-500 hover:bordered' to='makeAdmin'>Make Admin</Link></li>
                        }
                        {
                            admin && <li><Link className='hover:text-orange-500 hover:bordered' to='manageProducts'>Manage Products</Link></li>
                        }
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;