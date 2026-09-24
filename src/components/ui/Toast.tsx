import { CircleCheckBig } from "lucide-react";

export function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast-in fixed bottom-6 left-1/2 z-[70] flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-sm font-medium text-white shadow-xl dark:bg-brand-600"
    >
      <CircleCheckBig
        className="h-4 w-4 text-brand-400 dark:text-white"
        aria-hidden="true"
      />
      {message}
    </div>
  );
}
