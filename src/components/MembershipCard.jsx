import React, { useState } from 'react';
import Pagination from './Pagination';

function MembershipCard({ name, email, phone }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
            <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="w-20 h-20 rounded-full mb-4"
            />
            <p className="font-semibold text-gray-700">Admin</p>
            <p className="text-lg font-bold">{name}</p>
            <p className="text-sm text-gray-500">{email}</p>
            <p className="text-sm text-gray-500">{phone}</p>
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
    const itemsPerPage = 8;

    // Hitung jumlah halaman
    const totalPages = Math.ceil(members.length / itemsPerPage);

    // Mendapatkan data untuk halaman saat ini
    const currentMembers = members.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentMembers.map((member, index) => (
                    <MembershipCard
                        key={index}
                        name={member.name}
                        email={member.email}
                        phone={member.phone}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
}
