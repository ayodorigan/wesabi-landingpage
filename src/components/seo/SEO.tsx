import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    type?: string;
}

const SEO = ({ title, description, image = '/logo.png', type = 'website' }: SEOProps) => {
    useEffect(() => {
        document.title = `${title} | Wesabi Pharmacy`;

        const metaTitle = document.querySelector('meta[property="og:title"]');
        if (metaTitle) metaTitle.setAttribute('content', title);

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', description);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', image);

        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', title);

        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute('content', description);
    }, [title, description, image, type]);

    return null;
};

export default SEO;
