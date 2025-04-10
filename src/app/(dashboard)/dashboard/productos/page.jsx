import AdminLayout from '@/app/(dashboard)/dashboard/admin-layout';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import ProductTabs from '@/components/admin/products/ProductTabs';

export default async function Page() {
    const cookieStore = cookies();
    const hasToken = cookieStore.has('token');

    if (!hasToken) {
        redirect('/');
    }

    return (
        <AdminLayout>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-6">Catálogo</h1>
                <ProductTabs />
            </div>
        </AdminLayout>
    );
}
