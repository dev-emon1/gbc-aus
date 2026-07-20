import Logo from "@/components/shared/Logo";
import TopBar from "./TopBar";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import InquiryButton from "./InquiryButton";
import { CONTAINER } from "@/constants/layout";

export default function Header() {
  return (
    <>
      <TopBar />

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-gray-100
          bg-white/95
          backdrop-blur-xl
        "
      >
        <div className={CONTAINER}>
          <div className="grid h-[88px] xl:h-[96px] grid-cols-[190px_1fr_auto] xl:grid-cols-[220px_1fr_auto] 2xl:grid-cols-[240px_1fr_auto] items-center">
            {/* Logo */}
            <div className="flex min-w-0 items-center">
              <Logo />
            </div>

            {/* Menu */}
            <div className="flex min-w-0 justify-center">
              <NavMenu />
            </div>

            {/* Actions */}
            <div className="hidden shrink-0 lg:flex items-center gap-3 xl:gap-4">
              {/* <LanguageSwitcher /> */}
              <InquiryButton />
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
