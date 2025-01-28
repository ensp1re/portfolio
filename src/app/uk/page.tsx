'use client';

import { useRouter } from 'next/navigation';
import { Locale } from '@src/i18n/config';
import { setUserLocale } from '@src/services/locale';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const UaPage = () => {
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState<boolean>(true);

    useEffect(() => {

        const handleLanguageSwitch = (locale: Locale) => {
            setUserLocale(locale);
            router.push('/');
        };
        handleLanguageSwitch('uk');

        if (document.readyState === 'complete') {
            setIsLoaded(false);
        }
    }, [router]);

    return (
        isLoaded && (
            <div className="flex w-screen h-screen justify-center items-center bg-slate-50">
                <FaSpinner className="text-sky-400 animate-spin text-6xl" />
            </div>
        )
    );
};

export default UaPage;
