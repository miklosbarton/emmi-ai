'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


export default function Logo() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const logoSrc = currentTheme === 'dark' ? '/assets/logo/emmi_logo_white.svg' : '/assets/logo/emmi_logo.svg';

    return (
        <img src={logoSrc} alt="Logo" className='h-6' />
    );
}
