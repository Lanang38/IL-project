import React, { useState } from 'react';

export default function NavbarSetting({ activePage, setActivePage }) {
    return (
        <nav className="bg-transparent">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex space-x-4">
                    <button
                        onClick={() => setActivePage('Profile')}
                        className={`font-semibold pb-2 ${activePage === 'Profile' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => setActivePage('Membership')}
                        className={`font-semibold pb-2 ${activePage === 'Membership' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-500'}`}
                    >
                        Membership
                    </button>
                </div>
            </div>
        </nav>
    );
}
