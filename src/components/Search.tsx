import { useState, useEffect } from "react";
import { SearchX } from "lucide-react";

export default function Search({
  initialValue = "",
  onChange = () => {},
  onSearch = () => {},
  showEmpty = false,
}: {
  columnName?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  showEmpty?: boolean;
}) {
  const [value, setValue] = useState(initialValue);

  // On change, call parent with generated SQL
  useEffect(() => {
    onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="w-full max-w-md">
      {/* Search Input Only */}
      <input
        type="text"
        placeholder="Search articles, topics, insights..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(value);
          }
        }}
        className="w-full rounded-full bg-white py-4 pr-6 pl-6 font-['Manrope'] text-gray-900 shadow-lg focus:ring-2 focus:ring-white/50 focus:outline-none"
      />

      {/* Empty State */}
      {showEmpty && (
        <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 rounded-full bg-gray-100 p-4">
            <SearchX size={48} className="text-gray-400" strokeWidth={1.5} />
          </div>
          <h3 className="mb-2 font-['Poppins'] text-xl text-gray-900">
            No Blogs Found
          </h3>
          <p className="max-w-xs font-['Manrope'] text-sm text-gray-600">
            Try adjusting your search or check back later.
          </p>
        </div>
      )}
    </div>
  );
}
