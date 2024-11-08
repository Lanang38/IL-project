import React, { useState } from 'react';
import Pagination from './Pagination';

function MembershipCard({ name, email, phone }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center w-full sm:w-60 md:w-64">
            <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="w-20 h-20 rounded-full mb-2"
            />
            <div className="bg-blue-500 text-white font-semibold text-sm px-4 py-1 rounded-full mb-2 shadow-md">
                Admin
            </div>
            <p className="text-base font-semibold mb-1">{name}</p>
            <div className="bg-gray-100 w-full rounded-md py-1 px-3 mb-1 text-center shadow-sm">
                <p className="text-gray-700 text-xs">{email}</p>
            </div>
            <div className="bg-gray-100 w-full rounded-md py-1 px-3 text-center shadow-sm">
                <p className="text-gray-700 text-xs">{phone}</p>
            </div>
        </div>
    );
}

export default function Membership() {
    const members = [
        { name: 'Bagja', email: 'bagja@gmail.com', phone: '08543212387' },
        { name: 'Wiyang', email: 'wiyang@gmail.com', phone: '08543212387' },
        { name: 'Azhar', email: 'azhar@gmail.com', phone: '08543212387' },
        { name: 'Luci', email: 'luci@gmail.com', phone: '08543212387' },
        { name: 'Voldka', email: 'voldka@gmail.com', phone: '08543212387' },
        { name: 'Rama', email: 'rama@gmail.com', phone: '08543212387' },
        { name: 'Kamong', email: 'kamong@gmail.com', phone: '08543212387' },
        { name: 'Pugli', email: 'pugli@gmail.com', phone: '08543212387' },
        { name: 'Zaiky', email: 'zaiky@gmail.com', phone: '08543212387' },
        { name: 'Ilham', email: 'ilham@gmail.com', phone: '08543212387' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Hitung jumlah halaman
    const totalPages = Math.ceil(members.length / itemsPerPage);

    // Mendapatkan data untuk halaman saat ini
    const currentMembers = members.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentMembers.map((member, index) => (
                    <MembershipCard
                        key={index}
                        name={member.name}
                        email={member.email}
                        phone={member.phone}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}
