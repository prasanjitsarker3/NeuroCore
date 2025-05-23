import { LuFingerprint } from "react-icons/lu";

export default function SecurityAccess() {
  const platform = [
    { icon: <LuFingerprint className="h-6 w-6" />, name: "Identity" },
  ];

  return (
    <div className="w-72 h-72  flex items-center justify-center">
      <div className="w-28 h-28 flex items-center justify-center bg-white/5 rounded-sm primaryColor ">
        {platform[0].icon}
      </div>
    </div>
  );
}
