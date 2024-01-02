"use client";
import { sidebarLinks } from "@/constants";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link, i) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;
          return (
            <Link
              key={i}
              href={link.route}
              className={["bottombar_link", isActive && "bg-primary-500"].join(
                " "
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <span className="text-subtle-medium text-light-1 max-sm:hidden line-clamp-1">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
