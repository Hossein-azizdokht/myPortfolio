
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Head from 'next/head';

export default function Layout({ title, keywords, description, children }) {
    return (
        <>
            <Head>{title}</Head>
            <meta name="descriptions" content={description} />
            <meta name="keywords" content={keywords} />
            <Header/>
            {children}
            
            <Footer/>
        </>
    )
}

Layout.defaultProps = {
    title:"پارس تکنلوژی سداد",
    description:"پارس تکنلوژی سداد",
    keywords:'بانک ملی، سداد، فناوری اطلاعات، پشتیبانی بانک'
}
