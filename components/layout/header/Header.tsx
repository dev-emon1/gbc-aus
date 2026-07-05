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
          <div className="grid h-[96px] grid-cols-[240px_1fr_auto] items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Menu */}
            <div className="flex justify-center">
              <NavMenu />
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <InquiryButton />
            </div>

            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
