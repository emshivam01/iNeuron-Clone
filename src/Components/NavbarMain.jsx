import "../assets/ineuron-logo.png";

function NavbarMain() {
  return (
    <div className="flex justify-between items-center py-6 px-16">
      <div>
        <img
          className="w-28"
          src={require("../assets/ineuron-logo.png")}
          alt="iNeuron Logo"
        />
      </div>
      <div>
        <input
          className="border-2 border-gray-800 w-[800px] p-1 text-center placeholder:text-center rounded placeholder:text-black placeholder:text-lg outline-none"
          type={"search"}
          placeholder="What do you want to learn..?"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className=" rounded-md px-4 py-1">Sign Up</button>
        <button className=" rounded-md px-4 py-1 bg-[#233c7b] text-white">Sign In</button>
      </div>
    </div>
  );
}

export default NavbarMain;
