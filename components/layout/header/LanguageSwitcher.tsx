"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown, Globe } from "lucide-react";

export default function LanguageSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="
          flex
          items-center
          gap-2
          rounded-full
          px-3
          py-2
          text-sm
          font-medium
          transition-colors
          hover:bg-gray-100
        "
      >
        {/* <span className="text-base">🇬🇧</span> */}

        <span className="font-semibold">EN</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem>🇬🇧 EN - English</DropdownMenuItem>

        <DropdownMenuItem>🇧🇩 BN - Bengali</DropdownMenuItem>

        <DropdownMenuItem>🇨🇳 CN - Chinese</DropdownMenuItem>

        <DropdownMenuItem>🇸🇦 AR - Arabic</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
