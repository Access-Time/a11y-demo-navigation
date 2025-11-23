'use client';
import { useRouter } from "next/navigation";

export const NavButtons = () => {
    const router = useRouter();
    return (
      <ul>
        <li><button onClick={() => router.push('/alpha')}>Alpha</button></li>
        <li><button onClick={() => router.push('/beta')}>Beta</button></li>
        <li><button onClick={() => router.push('/gamma')}>Gamma</button></li>
        <li><button onClick={() => router.push('/delta')}>Delta</button></li>
      </ul>
    );
  };