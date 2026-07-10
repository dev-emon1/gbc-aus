type Props = {
  title: string;

  description: string;
};

export default function EmptyState({ title, description }: Props) {
  return (
    <div
      className="
                rounded-3xl
                border
                border-dashed
                py-20
                text-center
            "
    >
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-3 text-gray-500">{description}</p>
    </div>
  );
}
