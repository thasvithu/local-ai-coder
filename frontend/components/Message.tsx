interface MessageProps {
  role: "user" | "assistant";
  content: string;
}


export default function Message({
  role,
  content,
}: MessageProps) {

  return (
    <div
      className={`p-4 rounded-lg mb-3 ${
        role === "user"
          ? "bg-blue-600 ml-10"
          : "bg-gray-800 mr-10"
      }`}
    >

      <div className="text-xs opacity-60 mb-2">
        {role}
      </div>

      <pre className="whitespace-pre-wrap font-sans">
        {content}
      </pre>

    </div>
  );
}