type Props = {
  students: any[];
  activeId: number;
  onSelect: (student: any) => void;
};

export default function StudentSelector({
  students,
  activeId,
  onSelect,
}: Props) {
  return (
    <div
      className="
        mt-10

        flex
        flex-wrap

        justify-center
        lg:justify-end

        gap-6

        lg:pr-12
      "
    >
      {students.map((student) => (
        <button
          key={student.id}
          onClick={() => onSelect(student)}
          className="text-center"
        >
          <div
            className={`
              mx-auto

              h-16
              w-16

              overflow-hidden

              rounded-full

              border-[3px]

              transition-all
              duration-300

              ${
                activeId === student.id
                  ? "border-[#D84D95] scale-105"
                  : "border-slate-200"
              }
            `}
          >
            <img
              src={student.avatar}
              alt={student.name}
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          <h4
            className="
              mt-3
              text-[15px]
              font-semibold
              text-slate-900
            "
          >
            {student.name}
          </h4>

          <p
            className="
              text-xs
              text-slate-500
            "
          >
            {student.course}
          </p>
        </button>
      ))}
    </div>
  );
}
