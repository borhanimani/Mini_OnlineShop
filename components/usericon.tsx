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

    return (
        <div className='flex items-center gap-2 flex-row ml-4 lg:ml-10 '>
            <button onClick={openIt} className='flex gap-2'>
                <AccountCircleOutlinedIcon className='text-stone-700' style={{ scale: 1.9 }} display={'block'} />
                <p className='text-gray-700 font-bold ml-1'>{data ? "Hi, " + data.name.firstname + "!" : ''}</p>
            </button>
            <UserModal data={data ? data : { id: -1, name: { firstname: failedMessageItem, lastname: '' }, username: failedMessageItem, email: failedMessageItem, password: failedMessageItem }} open={isOpen} setOpen={closeIt} />
        </div>
    );
}