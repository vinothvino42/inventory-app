import Sidebar from "@/components/sidebar";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const totalProducts = await prisma.product.count();
  console.log("Total Products:", totalProducts);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back! Here is an overview of your inventory.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </main>
    </div>
  );
}
