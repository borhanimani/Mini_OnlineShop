import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function UserIcon() {
    return (
        <div className='flex items-center gap-2 flex-row ml-4 lg:ml-10'>
            <AccountCircleOutlinedIcon display={'block'} sx={{ width: 45, height: 45, color: "rgba(87, 86, 86, 1)", fontSize: "small" }} />
            <p className='text-gray-700 font-bold'>Hi, user!</p>
        </div>
    );
}