import Link from "next/link";
import { BsBugFill } from "react-icons/bs";

export default function NavBar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex place-items-center space-x-6 border-b mb-5 px-5 h-14">
      <Link href={"/"}>
        <BsBugFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              "text-violet-600 hover:text-violet-900 transition-colors"
            }
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
