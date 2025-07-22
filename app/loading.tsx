import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
    return (
        <div className='w-full h-full flex flex-row justify-center align-center items-center'>
            <div className='text-xl md:text-2xl mr-5'>Loading Page</div>
            <CircularProgress size="3rem" />
        </div>
    );
}