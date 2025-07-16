
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Navbar() {
  return (
    <header className=" flex flex-row justify-between border-3 h-1/8 items-center color-gray">
      <AccountCircleOutlinedIcon className='' sx={{ width: 45, height: 45, color: "#525151", fontSize: "small"}} />
      <h1 className="font-bold text-red-500">Online Shop</h1>
      <div>
        cart
        <div className="" >3</div>
      </div>
    </header>
  );
}