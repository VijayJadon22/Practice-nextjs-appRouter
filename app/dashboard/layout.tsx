import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <nav className="bg-black text-white py-4 px-8 flex justify-between">
        <h1 className="text-xl">Logo</h1>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Contact-us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="min-h-screen bg-emerald-500 w-[15vw] flex items-start justify-center py-8">
          <ul className="flex flex-col items-center gap-8 text-white font-semibold">
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </li>
            <li>
              <Link href={"/dashboard/todos"}>Todos</Link>
            </li>
            <li>
              <Link href={"/dashboard/user"}>User</Link>
            </li>
          </ul>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
