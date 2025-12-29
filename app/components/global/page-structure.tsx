import NavBar from '@/app/components/global/navbar';
import Footer from '@/app/components/global/footer';

export default function PageStructure({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans">
      <div className="top-0 left-0 w-full h-32 md:h-48 bg-linear-to-b from-grey-40 to-white dark:from-black dark:to-black-950" />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
