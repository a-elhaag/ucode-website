const LineDivider = ({
    variant = "default", // Default variant
    text = "Next Section",
    highlightedText = "//",
}) => {
    const getStyles = () => {
        switch (variant) {
            case "python-comment":
                return {
                    lineColor: "bg-blue-600",
                    textColor: "text-blue-600",
                    format: (
                        <>
                            <span className="text-orange-500"># </span>{text}
                        </>
                    ),
                };
            case "js-comment":
                return {
                    lineColor: "bg-yellow-500",
                    textColor: "text-yellow-500",
                    format: (
                        <>
                            <span className="text-gray-700">// </span>{text}
                        </>
                    ),
                };
            case "cpp-comment":
                return {
                    lineColor: "bg-orange-500",
                    textColor: "text-orange-500",
                    format: (
                        <>
                            <span className="text-blue-600">/* </span>{text}
                            <span className="text-blue-600"> */</span>
                        </>
                    ),
                };
            case "gradient-flow":
                return {
                    lineColor: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-500",
                    textColor: "text-gray-800",
                    format: (
                        <>
                            <span className="text-green-600">/*~ </span>{text}
                            <span className="text-green-600"> ~*/</span>
                        </>
                    ),
                };
            case "html-comment":
                return {
                    lineColor: "bg-red-500",
                    textColor: "text-red-600",
                    format: (
                        <>
                            <span className="text-gray-700">&lt;! </span>{text}
                            <span className="text-gray-700"> !&gt;</span>
                        </>
                    ),
                };
            default:
                return {
                    lineColor: "bg-gray-300",
                    textColor: "text-gray-600",
                    format: (
                        <>
                            <span className="text-orange-500">{highlightedText} </span>{text}
                        </>
                    ),
                };
        }
    };

    const { lineColor, textColor, format } = getStyles();

    return (
        <div className="relative py-8">
            {/* Line */}
            <div className={`absolute inset-x-0 top-1/2 h-[2px] ${lineColor}`}></div>

            {/* Centered Text */}
            <div className="relative flex justify-center">
                <div
                    className={`bg-white px-6 py-2 ${textColor} font-bold text-lg sm:text-xl md:text-2xl shadow-md rounded-full`}
                    aria-label={text}
                >
                    {format}
                </div>
            </div>
        </div>
    );
};

export default LineDivider;
