import { ReactNode } from "react";

type CoursesLayoutProps = {
  topbar: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
};

export default function CoursesLayout({
  topbar,
  sidebar,
  children,
}: CoursesLayoutProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Topbar */}
        <div className="mb-8">{topbar}</div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28">{sidebar}</div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">{children}</main>
        </div>
      </div>
    </section>
  );
}
