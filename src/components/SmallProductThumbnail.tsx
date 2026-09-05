interface SmallProductThumbnailProps {
  image: string;
  title: string;
  onClick?: () => void;
}

export function SmallProductThumbnail({
  image,
  title,
  onClick,
}: SmallProductThumbnailProps) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square cursor-pointer overflow-hidden rounded-[40px] transition-transform duration-300 hover:scale-105"
    >
      <img src={image} alt={title} className="h-full w-full object-contain" />
      {/* Gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#14525d] to-transparent" />
      {/* Product title */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center p-3">
        <h3 className="text-center font-['Manrope'] text-sm leading-tight text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}
