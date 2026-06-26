import Link from "next/link";

const courses = [
  "Business",
  "Management",
  "Human Resources",
  "Marketing",
  "Information Technology",
  "Project Management",
  "Health & Care",
  "General English",
  "Trade Courses",
];

export default function CoursesMegaMenu() {
  return (
    <div
      className="
        invisible
        absolute
        left-1/2
        top-full
        z-50
        mt-4
        w-[850px]
        -translate-x-1/2
        translate-y-2
        rounded-[28px]
        border
        border-gray-100
        bg-white
        p-8
        opacity-0
        shadow-[0_25px_80px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold">Find Your Course</h3>

        <p className="mt-2 text-sm text-gray-500">
          Industry-focused programs designed for international students.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {courses.map((course) => (
          <Link
            key={course}
            href="/courses"
            className="
              rounded-xl
              border
              border-gray-100
              px-4
              py-3
              text-sm
              font-medium
              transition-all
              hover:border-[#D84D95]
              hover:bg-pink-50
            "
          >
            {course}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/courses"
          className="
            inline-flex
            rounded-full
            bg-[#D84D95]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
          "
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
