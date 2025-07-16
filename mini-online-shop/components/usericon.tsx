import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function UserIcon() {
    return (
        <div className='flex flex-row items-center gap-2'>
            <AccountCircleOutlinedIcon className='ml-15' display={'block'} sx={{ width: 45, height: 45, color: "rgba(87, 86, 86, 1)", fontSize: "small" }} />
            <p className='text-gray-700 font-bold'>Hi, user!</p>
        </div>
    );
}