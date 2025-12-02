'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, LucideIcon, NotepadText, Home } from 'lucide-react';
import {
    Breadcrumb as ShadBreadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@sana/ui/components/breadcrumb';
import { useEffect, useState } from 'react';
import { menuItems } from '../../../_config/menu.conf';

interface BreadcrumbItemType {
    title: string;
    url: string;
}

export function Breadcrumb() {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemType[]>([]);

    useEffect(() => {
        const newCrumbs: BreadcrumbItemType[] = [];
        const parentItem = menuItems.find(item => pathname.startsWith(item.url));

        if (parentItem) {
            newCrumbs.push({ title: parentItem.title, url: parentItem.url });

            const subItem = parentItem.subitems?.find(sub => pathname === sub.url);

            if (subItem && subItem.url !== parentItem.url) {
                newCrumbs.push({ title: subItem.title, url: subItem.url });
            }
        }

        setBreadcrumbs(newCrumbs);
    }, [pathname]);

    if (pathname === '/dashboard/home') {
        return (<div className='flex items-center'>
            <Link href="/dashboard/home" className="flex items-center hover:text-primary-400 text-sm transition-colors">
                <span>خانه</span>
            </Link>
        </div>
        );
    }

    return (
        <ShadBreadcrumb className="text-sm text-gray-600" dir="rtl">
            <BreadcrumbList className="flex items-center">
                <div className='w-[1px] h-[16px] bg-gray-300'></div>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/dashboard/home" className="flex items-center hover:text-primary-400 transition-colors">
                            <span>خانه</span>
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <BreadcrumbItem key={crumb.url}>
                            <BreadcrumbSeparator>
                                <ChevronLeft className="w-4 h-4" />
                            </BreadcrumbSeparator>
                            {isLast ? (
                                <span className="text-gray-900 font-medium">{crumb.title}</span>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={crumb.url} className="hover:text-blue-600 transition-colors">
                                        {crumb.title}
                                    </Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </BreadcrumbList>
        </ShadBreadcrumb>
    );
}