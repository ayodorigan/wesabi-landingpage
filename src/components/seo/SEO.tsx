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

        // Ensure the URL includes the hash for shared links to work with static hosting
        const currentUrl = window.location.href;

        const metaTitle = document.querySelector('meta[property="og:title"]');
        if (metaTitle) metaTitle.setAttribute('content', title);

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', description);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', image);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', currentUrl);
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:url');
            meta.setAttribute('content', currentUrl);
            document.head.appendChild(meta);
        }

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', currentUrl);
        } else {
            const link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            link.setAttribute('href', currentUrl);
            document.head.appendChild(link);
        }

        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', title);

        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute('content', description);
    }, [title, description, image, type]);

    return null;
};

export default SEO;
