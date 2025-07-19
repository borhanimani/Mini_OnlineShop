import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function UserIcon() {
    return (
        <div className='flex items-center gap-2 flex-row ml-4 lg:ml-10'>
            <AccountCircleOutlinedIcon className='text-stone-700' style={{scale:1.9}} display={'block'} />
            <p className='text-gray-700 font-bold ml-1'>Hi, user!</p>
        </div>
    );
}