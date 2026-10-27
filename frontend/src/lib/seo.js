import { useEffect } from 'react';

export default function useSeo(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | John Arvy Lopez` : 'John Arvy Lopez | Full-stack Developer';
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute('content', description);
  }, [description, title]);
}
