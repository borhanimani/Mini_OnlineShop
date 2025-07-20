'use client'

import { fetchUser } from '@/libs/http-requests';
import { UseQueryUser } from '@/utils/project-types';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import UserModal from './usermodal';

export default function UserIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const failedMessageItem: string = "failed to fetch";

    const { data }: UseQueryUser = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser
    });

    const openIt = () => setIsOpen(true);

    const closeIt = () => setIsOpen(false);

    if (data) {
        console.log('tt: ', data.name);
    }

    return (
        <div className='flex items-center gap-2 flex-row ml-4 lg:ml-10 '>
            <button onClick={openIt} className='flex items-center gap-2 flex-row ml-4 lg:ml-10 border-1'>
                <AccountCircleOutlinedIcon className='text-stone-700' style={{ scale: 1.9 }} display={'block'} />
                <p className='text-gray-700 font-bold ml-1'>Hi, {data?.name.firstname}!</p>
            </button>
            <UserModal data={data ? data : { id: -1, name: { firstname: failedMessageItem, lastname: failedMessageItem }, username: failedMessageItem, email: failedMessageItem, password: failedMessageItem }} open={isOpen} setOpen={closeIt} />
        </div>
    );
}