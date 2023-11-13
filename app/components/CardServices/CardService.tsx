import type { CardServiceProps } from "./CardService.d";

export default function CardService({
  title,
  description,
  list,
  children,
}: CardServiceProps) {
  return (
    <div className="overflow-hidden bg-white border-2 border-pink-50 rounded-md">
      <div className="p-8 xl:px-12">
        <p className="text-3xl font-bold text-black mt-7">{title}</p>
        <p className="mt-3 text-base text-gray-600">{description}</p>

        <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
          {list &&
            list.map((item, index) => (
              <li className="inline-flex items-center space-x-2" key={index}>
                <svg
                  className="flex-shrink-0 w-5 h-5 text-pink-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium text-gray-900">
                  {item}
                </span>
              </li>
            ))}
        </ul>

        <a
          href="/"
          title=""
          className="inline-flex items-center justify-center px-20 py-2.5 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-[#fa788e] hover:bg-[#fb5975] focus:bg-[#fb5975]"
          role="button"
        >
          Necesito esto
        </a>
      </div>
    </div>
  );
}