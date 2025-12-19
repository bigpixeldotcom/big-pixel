import NavBar from '@/app/components/global/navbar';
import Footer from '@/app/components/global/footer';

export default function PageStructure({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans bg-white dark:bg-black-900">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
