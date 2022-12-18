import AppLayout from "@/layouts/AppLayout";

export default function dashboard() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-zinc-900  dark:text-caramel-100">
            Assets
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-zinc-200" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
