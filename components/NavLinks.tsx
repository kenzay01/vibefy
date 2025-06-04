import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLinks({
  header,
  links,
  isOpenMenu,
}: {
  header: string;
  links: {
    name: string;
    href: string;
    icon: React.ReactNode;
    shortName: string;
  }[];
  isOpenMenu: boolean;
}) {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <div className="space-y-1">
      {isOpenMenu && (
        <h2 className="text-[13px] text-neutral-400 font-semibold">{header}</h2>
      )}
      <ul className="space-y-1">
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isActive(link.href)
                  ? "bg-indigo-500 hover:bg-indigo-400"
                  : "hover:bg-neutral-700"
              }`}
            >
              <Link
                href={link.href}
                className={`font-semibold flex items-center  ${
                  isOpenMenu ? "flex-row gap-2" : "flex-col text-[12px] gap-1"
                } duration-200 transition-all `}
              >
                {link.icon}
                {isOpenMenu ? link.name : link.shortName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
